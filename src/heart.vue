<template>
    <svg
      :class="['vue-heart-rating-heart', {'vue-heart-rating-heart-rotate' : shouldAnimate}]"
      :height="heartSize"
      :width="heartSize"
      :viewBox="viewBox"
      @mousemove="mouseMoving"
      @click="selected"
      @touchstart="touchStart"
      @touchend="touchEnd"
    >
  
      <!-- Gradient for fill -->
      <linearGradient
        :id="grad"
        x1="0"
        x2="100%"
        y1="0"
        y2="0"
      >
        <stop
          :offset="heartFill"
          :stop-color="(rtl) ? getColor(inactiveColor) : getColor(activeColor)"
          :stop-opacity="(rtl) ? getOpacity(inactiveColor) : getOpacity(activeColor)"
        />
        <stop
          :offset="heartFill"
          :stop-color="(rtl) ? getColor(activeColor) : getColor(inactiveColor)"
          :stop-opacity="(rtl) ? getOpacity(activeColor) : getOpacity(inactiveColor)"
        />
      </linearGradient>
  
      <!-- Glow effect -->
      <filter
        :id="glowId"
        height="130%"
        width="130%"
        filterUnits="userSpaceOnUse"
      >
        <feGaussianBlur
          :stdDeviation="glow"
          result="coloredBlur"
        />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
  
      <!-- Heart path with glow and border -->
      <path
        v-show="glowColor && glow > 0 && fill > 0"
        :d="heartPath"
        :fill="gradId"
        :stroke="glowColor"
        :filter="'url(#'+glowId+')'"
        :stroke-width="border"
      />
  
      <!-- Heart path without glow (normal state) -->
      <path
        :d="heartPath"
        :fill="gradId"
        :stroke="getBorderColor"
        :stroke-width="border"
        :stroke-linejoin="strokeLinejoin"
      />
    </svg>
  </template>
  
  <script type="text/javascript">
  import AlphaColor from './classes/AlphaColor'
  
  export default {
    name: 'Heart',
    props: {
      fill: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 50
      },
      heartId: {
        type: Number,
        required: true
      },
      activeColor: {
        type: String,
        required: true
      },
      inactiveColor: {
        type: String,
        required: true
      },
      borderColor: {
        type: String,
        default: '#000'
      },
      activeBorderColor: {
        type: String,
        default: '#000'
      },
      borderWidth: {
        type: Number,
        default: 0
      },
      roundedCorners: {
        type: Boolean,
        default: false
      },
      rtl: {
        type: Boolean,
        default: false
      },
      glow: {
        type: Number,
        default: 0
      },
      glowColor: {
        type: String,
        default: null,
        required: false
      },
      animate: {
        type: Boolean,
        default: false
      }
    },
    emits: ['heart-mouse-move', 'heart-selected'],
    data() {
      return {
        heartPath: 'M 297.29747 550.86823 C 283.52243 535.43191 249.1268 505.33855 220.86277 483.99412 C 137.11867 420.75228 125.72108 411.5999 91.719238 380.29088 C 29.03471 322.57071 2.413622 264.58086 2.5048478 185.95124 C 2.5493594 147.56739 5.1656152 132.77929 15.914734 110.15398 C 34.151433 71.768267 61.014996 43.244667 95.360052 25.799457 C 119.68545 13.443675 131.6827 7.9542046 172.30448 7.7296236 C 214.79777 7.4947896 223.74311 12.449347 248.73919 26.181459 C 279.1637 42.895777 310.47909 78.617167 316.95242 103.99205 L 320.95052 119.66445 L 330.81015 98.079942 C 386.52632 -23.892986 564.40851 -22.06811 626.31244 101.11153 C 645.95011 140.18758 648.10608 223.6247 630.69256 270.6244 C 607.97729 331.93377 565.31255 378.67493 466.68622 450.30098 C 402.0054 497.27462 328.80148 568.34684 323.70555 578.32901 C 317.79007 589.91654 323.42339 580.14491 297.29747 550.86823 z',
        grad: '',
        glowId: '',
        isHeartActive: true
      };
    },
    computed: {
      gradId() {
        return 'url(#' + this.grad + ')'
      },
      heartSize() {
        const size = (this.roundedCorners && this.borderWidth <= 0) ? parseInt(this.size) - parseInt(this.border) : this.size;
        return parseInt(size) + parseInt(this.border);
      },
      heartFill() {
        return (this.rtl) ? 100 - this.fill + '%' : this.fill + '%';
      },
      border() {
        return (this.roundedCorners && this.borderWidth <= 0) ? 6 : this.borderWidth;
      },
      getBorderColor() {
        if (this.roundedCorners && this.borderWidth <= 0) {
          return (this.fill <= 0) ? this.inactiveColor : this.activeColor;
        }
        return (this.fill <= 0) ? this.borderColor : this.activeBorderColor;
      },
      maxSize() {
        return 700; // Adjust to the original width of the heart path
      },
      viewBox() {
        return '0 0 ' + this.maxSize + ' ' + this.maxSize;
      },
      shouldAnimate() {
        return this.animate && this.isHeartActive;
      },
      strokeLinejoin() {
        return this.roundedCorners ? 'round' : 'miter';
      }
    },
    created() {
      this.grad = this.getRandomId();
      this.glowId = this.getRandomId();
    },
    methods: {
      mouseMoving($event) {
        if ($event.touchAction !== 'undefined') {
          this.$emit('heart-mouse-move', {
            event: $event,
            position: this.getPosition($event),
            id: this.heartId
          });
        }
      },
      touchStart() {
        this.$nextTick(() => {
          this.isHeartActive = true;
        });
      },
      touchEnd() {
        this.$nextTick(() => {
          this.isHeartActive = false;
        });
      },
      getPosition($event) {
        let heartWidth = (92 / 100) * this.size;
        const offset = (this.rtl) ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1);
        let position = Math.round((100 / heartWidth) * offset);
        return Math.min(position, 100);
      },
      selected($event) {
        this.$emit('heart-selected', {
          id: this.heartId,
          position: this.getPosition($event)
        });
      },
      getRandomId() {
        return Math.random().toString(36).substring(7);
      },
      getColor(color) {
        return new AlphaColor(color).parseAlphaColor().color;
      },
      getOpacity(color) {
        return new AlphaColor(color).parseAlphaColor().opacity;
      }
    }
  };
  </script>
  
  <style scoped>
  .vue-heart-rating-heart {
    overflow: visible !important;
  }
  
  .vue-heart-rating-heart-rotate {
    transition: all 0.25s;
  }
  
  .vue-heart-rating-heart-rotate:hover {
    transition: transform 0.25s;
    transform: rotate(-15deg) scale(1.3);
  }
  </style>
  