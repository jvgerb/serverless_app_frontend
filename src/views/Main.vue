<template>
  <div class="grid-container">
    <Navbar class="navbar"></Navbar>
    <Sidebar class="sidebar"></Sidebar>
    <div class="content">
      <h1>
        <i v-if="currentContent.icon" :class="[`icon-${currentContent.icon || 'no-icon'}`]"></i>
        {{currentContent.title}}
      </h1>
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
import { views, routes } from './views-routes';
@Component({
  components: { Navbar, Sidebar, ...views },
})
export default class Main extends Vue {
  get menuRoute() {
    return (
      this.$route.params.menu &&
      routes.find((x: any) => this.$route.params.menu.toLowerCase() == x.link)
    );
  }
  get subMenuRoute() {
    return (
      this.menuRoute &&
      this.$route.params.submenu &&
      this.menuRoute.routes.find(
        (x: any) => this.$route.params.submenu.toLowerCase() == x.link
      )
    );
  }
  get tabRoute() {
    return (
      this.subMenuRoute &&
      this.$route.params.tab &&
      this.subMenuRoute.routes.find(
        (x: any) => this.$route.params.tab.toLowerCase() == x.link
      )
    );
  }
  get currentContent() {
    // redirect to default route if menu, submenu or tab does not exist
    if (!this.menuRoute) {
      this.$router.replace(`/customer/customer/customer`);
    } else if (!this.subMenuRoute) {
      this.$router.replace(
        `/${this.menuRoute.link}/${this.menuRoute.routes[0].link}/${
          this.menuRoute.routes[0].routes[0].link
        }`
      );
    } else if (!this.tabRoute) {
      this.$router.replace(
        `/${this.menuRoute.link}/${this.subMenuRoute.link}/${
          this.subMenuRoute.routes[0].link
        }`
      );
    }
    const currentRoute = this.tabRoute || {};
    const currentViewName =
      this.tabRoute &&
      (
        this.tabRoute.component ||
        this.tabRoute.title ||
        this.tabRoute.name
      ).replace(/[^a-zA-Z0-9]/g, '');
    return {
      title: currentRoute.title,
      viewName:
        Object.keys(views).includes(currentViewName) && this.tabRoute
          ? currentViewName
          : 'ComingSoon',
      icon: currentRoute.icon,
    };
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: var(--second-bg-color);
  h1 {
    margin: 0;
    padding-left: 50px;
    height: 75px;
    line-height: 75px;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.08);
    i {
      font-size: 25px;
      margin-right: 6px;
    }
  }
  .view-container {
    padding: 28px 45px;
    width: calc(
      100vw - var(--sidebar-menu-width) - var(--sidebar-submenu-width)
    );
  }
}
</style>