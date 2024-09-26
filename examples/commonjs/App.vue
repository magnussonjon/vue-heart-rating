<template>
    <div style="background: #000;padding:50px;">
        <heart-rating
                v-model:rating="rating"
                :round-start-rating="false"
                :heart-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                :border-width="4"
                :active-color="['#ae0000','#003333']"
                :active-border-color="['#F6546A','#a8c3c0']"
                :clearable="true"
                active-on-click
                animate
                :padding="3"
        >
            <template v-slot:screen-reader="slotProps">
                This product has been rated {{slotProps.rating}} out of {{slotProps.hearts}}
            </template>
        </heart-rating>
        <a
                href="#"
                @click.prevent="rating = 3.5"
        >Reset</a>
        {{ rating }}
    </div>
</template>
<script type="text/javascript">
    import HeartRating from '../../src/heart-rating.vue';

    export default {
        components: {
            HeartRating
        },
        data() {
            return {
                rating: 3
            }
        }
    }
</script>
