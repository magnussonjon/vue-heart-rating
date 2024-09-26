# Heart Rating Component for Vue 2.x / 3.x

[![Build Status](https://travis-ci.org/craigh411/vue-heart-rating.svg?branch=master)](https://travis-ci.org/craigh411/vue-heart-rating)
[![npm](https://img.shields.io/npm/dt/vue-heart-rating.svg)]()

A simple, highly customisable heart rating component for Vue 2.x. / 3.x

> Need more than hearts? Check out [vue-rate-it](https://github.com/craigh411/vue-rate-it) with hundreds of different raters built in!

### Screenshot

![heart-rating.png](https://user-images.githubusercontent.com/13747552/76623388-4ee74580-652b-11ea-9efb-5fb0ca548980.png)

#### See it in action:
- [Vue 2 Examples](https://jsfiddle.net/craig_h_411/992o7cq5/)
- [Vue 3 Examples](https://codepen.io/craigh411/pen/abNXVQN)

## Features:

  - SVG hearts - scale without loss of quality.
  - Customisable rating increments.
  - Customisable colors.
  - Customisable number of hearts.
  - Create read-only hearts.

## Usage

### Install Via NPM


Install via npm:

#### Vue 2.x Install

`npm install vue-heart-rating`

#### Vue 3.x Install

If you're using Vue 3 you will currently need to install the `next` version of `vue-heart-rating`

`npm install vue-heart-rating@next`

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

### Via CDN

You may also include `vue-heart-rating` directly in to your webpage via Unpkg. Simply add the following script tag:

#### Vue 2.x

```javascript
<script src="https://unpkg.com/vue-heart-rating/dist/VueHeartRating.umd.min.js"></script>`
```

You will need to register the component by doing:

```javascript
Vue.component('heart-rating', VueHeartRating.default);
```

#### Vue 3.x

```javascript
<script src="https://unpkg.com/vue-heart-rating@next/dist/VueHeartRating.umd.min.js"></script>
````

```javascript
const app = Vue.createApp({ 
  // Your component code
 })
app.component('heart-rating', VueHeartRating.default)
app.mount('#app')
```


## Getting Started

To get started with `vue-heart-rating` you will want to sync the rating values between the component and parent, you can then take a look at the props and custom events section of the docs to customise your `heart-rating` component.

### Syncing Rating Values with V-Model

`vue-heart-rating` supports `v-model`, which is the simplest way to keep your ratings in sync:

#### Vue 2.2+

```HTML
<heart-rating v-model="rating"></heart-rating>
```

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
| heart-points | The points defining a custom heart shape.<br><small>_If no points are passed the default heart shape is used._</small> | Array| [] |
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
| rounded-corners | Whether or not to round the heart's corners | Boolean | false |
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

### Vue 2.x Events

| Event  | Description | Return Value
| ------------- | ------------- |-----------|
| rating-selected  | Returns the rating the user selects via the click event |  rating
| current-rating  | Returns the rating that the users mouse is currently over  | rating

#### Vue 2.x Example

```HTML
<heart-rating @rating-selected ="setRating"></heart-rating>
```

Then in your view model:

```javascript
new Vue({
  el: '#app',
  methods: {
    setRating: function(rating){
      this.rating= rating;
    }
  },
  data: {
    rating: 0
  }
});
```

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

Open-source should always be 100% FREE! but, if you're feeling generous, feel free to:

<a href="https://www.buymeacoffee.com/fkocI2e6H" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
