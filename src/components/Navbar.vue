<template>
  <nav>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars';

nav {
  display: grid;
  grid-template-columns: 66px 297px auto 200px;
  height: 85px;
}
</style>
