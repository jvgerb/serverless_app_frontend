<template>
  <div>
    <h1 v-if="$route.params.tab">Coming soon...</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ComingSoon extends Vue {}
</script>

<style lang="scss" scoped>
</style>
