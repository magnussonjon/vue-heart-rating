# Heart Rating Component for Vue 3.x

[![Build Status](https://travis-ci.org/magnussonjon/vue-heart-rating.svg?branch=master)](https://travis-ci.org/magnussonjon/vue-heart-rating)
[![npm](https://img.shields.io/npm/dt/vue-heart-rating.svg)]()

A simple, highly customizable heart rating component for Vue 3.x.

> This component is based on [vue-star-rating](https://www.npmjs.com/package/vue-star-rating), but it has been modified to use hearts instead of stars.

## Features:

  - SVG hearts - scale without loss of quality.
  - Customisable rating increments.
  - Customisable colors.
  - Customisable number of hearts.
  - Create read-only hearts.

## Usage

### Install Via NPM


Install via npm:

#### Vue 3.x Install

`npm install vue-heart-rating`

---

Once installed import in to your component:

`import HeartRating from 'vue-heart-rating'`

Then register `vue-heart-rating` using the components option:

```javascript
components: {
  HeartRating
}
```

You can then use the following markup in your project:

`<heart-rating />`

---

## Getting Started

To get started with `vue-heart-rating` you will want to sync the rating values between the component and parent, you can then take a look at the props and custom events section of the docs to customise your `heart-rating` component.

### Syncing Rating Values with V-Model

`vue-heart-rating` supports `v-model`, which is the simplest way to keep your ratings in sync:

#### Vue 3.x

v-model works on the `rating` prop, so if you're using **Vue 3** you will need to do:

```HTML
<heart-rating v-model:rating="rating"></heart-rating>
```

## Docs

### Props

The following props can be passed to the component:

#### General Props

These props provide general functionailty to the heart rating component

| Prop  | Description | Type | Default |
| ------------- | ------------- |-------------|-------------|
| increment  |  The rating increment, for example pass 0.5 for half hearts or 0.01 for fluid hearts. Expects a number between 0.01 - 1. | Number | 1
| rating  | The initial rating, this will automatically round to the closest increment, so for the most accurate rating pass 0.01 as increment or set the `round-start-rating` prop to false  | Number | 0 |
| max-rating  | The maximum rating, this lets `vue-heart-rating` know how many hearts to display | Number | 5 |
| read-only  | When set to true, the rating cannot be edited. Use in conjuction with `increment` to define rounding precision.  | Boolean | false |
| show-rating  | Whether or not to show the rating next to the hearts  | Boolean | true |
| fixed-points  | Specify a fixed number of digits after the decimal point. | Number | null |
| rtl  | Pass true to display heart rating using rtl (right-to-left) | Boolean | false |
| round-start-rating  | Pass false if you don't want the start rating value to round to the closest increment. The user will still only be able to select based on the given increment. | Boolean | true |
| clearable  | When set to true a second click on the same rating clears the rating | Boolean | false |
| active-on-click  | When set to true only apply active colors when the user clicks the heart, rather than on mouseover.  | Boolean | false |


#### Style Props

These props are used to style the heart rating component


| Prop  | Description | Type | Default |
| ------------- | ------------- |-------------|-------------|
| heart-size  | The size of each heart, this gets passed to the `SVG` width attribute, so  larger numbers are larger hearts  | Number | 50 |
| inactive-color  | The color of the non-highlighted portion of a heart.  | String | #d8d8d8 |
| active-color  | The color of the highlighted portion of a heart. Pass an array of colors to color each heart individually | String &#124; Array | #ffd055 |
| border-color  | Sets the colour of the border for each heart | String | #999 |
| active-border-color  | The border color of a highlighted heart. Pass an array of colors to color each heart's border individually  | String &#124; Array | null |
| border-width  | Sets the width of the border for each heart | Number | 0 |
| animate  | Set to true for an animation to be applied on mouseover | Boolean | false |
| padding  | Pads the right of each heart so distance between hearts can be altered | Number | 0 |
| inline  | Sets the heart rating to display inline | Boolean | false |
| glow | Adds a subtle glow around each active heart, this should be a number to spread the glow | Number | 0 |
| glow-color | Sets the color for the glow  | String | #fff |
| text-class  | A css class name to style the rating text for a specific heart rating component | String | '' |

**Important:** Vue requires you to pass numbers and boolean values using `v-bind`, any props that require a number or bool should use `v-bind:` or the colon (`:`) shorthand.


#### Props Example

```HTML
<heart-rating v-bind:increment="0.5"
             v-bind:max-rating="3"
             inactive-color="#000"
             active-color="#f00"
             v-bind:heart-size="90">
</heart-rating>
```

#### Passing an Array of Colors

The `active-color` and `active-border-color` props also accept an array of colors. The colors in the array will be applied to the hearts in order, so index 0 will be the color of the first heart, index 1 will be the second and so on. 
Any array you pass will be padded if the number of elements in the array is less than the number of hearts. This means that the following code will color the first heart red and *ALL* remaining hearts black.


```HTML
<heart-rating :active-color="['red','black']">
</heart-rating>
```


### Custom Events

`vue-heart-rating` fires the following custom events, simply use `v-on:` or the `@` shortand to capture the event.

### Vue 3.x Events

Some changes have been made to event names in Vue 3

| Event  | Description | Return Value
| ------------- | ------------- |-----------|
| update:rating  | Returns the rating the user selects via the click event |  rating
| hover:rating  | Returns the rating that the users mouse is currently over  | rating


#### Vue 3.x Example

```HTML
<heart-rating @update:rating ="setRating"></heart-rating>
```

Then in your view model:

```javascript
const app = Vue.createApp({
  methods: {
    setRating(rating){
      this.rating= rating;
    }
  },
  data: {
    rating: 0
  }
})
app.component('heart-rating', VueHeartRating.default)
app.mount('#app')

```

### Screen Reader Support

`vue-heart-rating` has built in support for screen readers. By default this message will read "Rated {{rating}} out of {{maxRating}} hearts", you can change this by using the `screen-reader` scoped slot:
                                                                                                                                                                 

````javascript
<heart-rating>
    <template v-slot:screen-reader="slotProps">
        This product has been rated {{slotProps.rating}} out of {{slotProps.hearts}} hearts
    </template>
</heart-rating>
````

### IE9 Support

  `vue-heart-rating` supports IE 9+; make sure you place the following in the `head` of your webpage to ensure that IE is in standards mode:

`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`


------------------------------------------------