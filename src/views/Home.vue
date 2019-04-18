<template>
  <div class="grid-container">
    <Navbar class="navbar"></Navbar>
    <Sidebar class="sidebar"></Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: { Navbar, Sidebar },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'sidebar navbar'
    'sidebar content';
}
.sidebar {
  grid-area: sidebar;
}

.navbar {
  grid-area: navbar;
}

.content {
  grid-area: content;
}
</style>
