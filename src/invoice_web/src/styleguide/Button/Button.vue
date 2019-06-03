<template>
  <button
    class="buttonDynamic"
    @click="onClick"
    :style="{
      color: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      width: width,
      height: height,
      fontWeight: fontWeight
    }"
  >{{ title }}</button>
</template>

<script>

import { color } from '@/styleguide/colors';

export default {
  name: 'Button',
  props: {
    title: String,
    onClick: {
      type: Function,
      required: true
    },
    color: {
      type: String
    },
    width: {
      type: String,
      default: '140px'
    },
    height: {
      type: String,
      default: '35px'
    },
    fontWeight: {
      Type: String
    },
    backgroundColor: {
      type: String,
      default: color('buttonface')
    },
    borderColor: {
      type: String
    },
    borderRadius: {
      type: String,
      default: '4px'
    }
  }
};

</script>

<style scoped lang="scss">

  .buttonDynamic {
    font-size: 14px;
  }

</style>

