<template>
  <div>
    <div class="rating-star">
      <svg v-for="n in 5" :key="n" :class="{rate:n<=value}" @click="value = n">
        <use xlink:href="#star"></use>
      </svg>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="star" viewBox="0 0 53.867 53.867">
        <polygon
          points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
	        10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
        ></polygon>
      </symbol>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Rating extends Vue {
  value = 3;
}
</script>

<style lang="scss" scoped>
.rating-star {
  display: grid;
  grid-auto-flow: column;
  width: 135px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
    margin-left: 8px;
    stroke: var(--accent-color);
    fill: white;
    cursor: pointer;
    &.rate {
      fill: var(--accent-color);
    }
  }
  &:hover svg {
    fill: var(--accent-color);
  }
  svg:active {
    fill: var(--accent-color);
    opacity: 0.8;
  }

  @for $i from 1 through 5 {
    svg:hover:nth-of-type(#{$i}) ~ svg:nth-of-type(n + 1) {
      fill: white;
    }
  }
}
</style>
