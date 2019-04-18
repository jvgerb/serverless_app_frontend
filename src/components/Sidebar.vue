<template>
  <nav>
    <ul class="side-menu">
      <li>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
      </li>
      <li>
        <i class="icon-no-icon"></i>
      </li>
      <li>
        <i class="icon-no-icon"></i>
      </li>
      <li>
        <i class="icon-no-icon"></i>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.side-menu {
  a {
    display: block;
    width: 66px;
    height: 66px;
  }
}
</style>
