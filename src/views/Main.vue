<template>
  <div class="grid-container">
    <Navbar class="navbar"></Navbar>
    <Sidebar class="sidebar"></Sidebar>
    <div class="content">
      <h1>{{currentContent.name}}</h1>
      <div class="view-container">
        <component :is="currentContent.viewName"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import { views } from './views';

@Component({
  components: { Navbar, Sidebar, ...views },
})
export default class Main extends Vue {
  get currentContent() {
    return {
      name: 'Contact',
      viewName: 'Contact',
    };
  }
}
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
  background-color: var(--second-bg-color);
  h1 {
    margin: 0;
    padding-left: 50px;
    height: 75px;
    line-height: 75px;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.08);
  }

  .view-container {
    padding: 28px 45px;
  }
}
</style>
