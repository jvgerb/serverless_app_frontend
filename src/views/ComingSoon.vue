<template>
  <div>
    <h2 v-if="$route.params.tab">Not ready yet</h2>
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
