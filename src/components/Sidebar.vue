<template>
  <nav>
    <div class="menu">
      <a class="top-menu" @click="toggleMenu">
        <i class="icon-hamburger"></i>
      </a>
      <div class="middle-menu">
        <router-link v-for="route in menuRoutes" :key="route.name" :to="'/'+route.link">
          <i :class="[`icon-${route.icon || 'no-icon'}`]"></i>
        </router-link>
      </div>
      <div class="bottom-menu">
        <a href="#">
          <i class="icon-settings"></i>
        </a>
        <a href="#" class="account-btn">
          <img src="@/assets/img/account.png" alt="Account">
          <span class="badge">9+</span>
        </a>
      </div>
    </div>
    <div class="submenu">
      <div class="top-submenu">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt>
        </router-link>
      </div>
      <div class="bottom-submenu">
        <h2>{{currentRoute.name}}</h2>
        <router-link
          v-for="route in submenuRoutes"
          :key="route.name"
          :to="'/'+$route.params.menu +'/'+route.link"
        >
          <i :class="[`icon-${route.icon || 'no-icon'}`]"></i>
          {{route.name}}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { routes } from '../views/views-routes';
import router from '../router';
@Component({
  components: {},
})
export default class Sidebar extends Vue {
  get currentRoute() {
    return (
      (this.$route.params.menu &&
        routes.find(x => this.$route.params.menu.toLowerCase() == x.link)) ||
      {}
    );
  }
  get menuRoutes() {
    return routes;
  }
  get submenuRoutes() {
    const menuRoute =
      this.$route.params.menu &&
      routes.find((x: any) => this.$route.params.menu.toLowerCase() == x.link);
    return (menuRoute && menuRoute.routes) || [];
  }
  beforeCreate() {
    document.documentElement.style.setProperty(
      '--sidebar-submenu-width',
      localStorage['sidebar-submenu-width'] || '300px'
    );
  }
  toggleMenu() {
    let width = getComputedStyle(document.documentElement).getPropertyValue(
      '--sidebar-submenu-width'
    );
    width = width === '0' ? '300px' : '0';
    document.documentElement.style.setProperty(
      '--sidebar-submenu-width',
      width
    );
    localStorage['sidebar-submenu-width'] = width;
  }
}
</script>

<style lang="scss" scoped>
.menu {
  grid-area: menu;
  display: grid;
  grid-template-columns: var(--sidebar-menu-width);
  grid-template-rows: var(--nav-height) auto 150px; // 150px is the last section with cog icon
  grid-template-areas:
    'top-menu'
    'middle-menu'
    'bottom-menu';
  box-shadow: 1px 0px 6px #d9d9d9;
}
.submenu {
  grid-area: submenu;
  display: grid;
  grid-template-columns: var(--sidebar-submenu-width);
  grid-template-rows: var(--nav-height) auto;
  grid-template-areas:
    'top-submenu'
    'bottom-submenu';
  i {
    font-size: 18px;
  }
}
.top-menu {
  grid-area: top-menu;
  height: var(--nav-height);
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 0px #d9d9d9;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: all 0.4s;
  i {
    font-size: 20px;
  }

  &:hover {
    background-color: var(--accent-hover-color);
  }

  &:active {
    opacity: 0.8;
  }
}
.middle-menu {
  grid-area: middle-menu;
  i {
    font-size: 28px;
  }
}
.bottom-menu {
  grid-area: bottom-menu;
  i {
    font-size: 20px;
  }
  .account-btn {
    position: relative;
    img {
      width: 46px;
      height: 46px;
      background: white;
      border-radius: 15px;
    }
    .badge {
      display: inline-block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 12px;
      color: white;
      line-height: 1.5;
      position: absolute;
      top: 1px;
      right: 1px;
      background-color: var(--accent-color);
    }
  }
}
.middle-menu,
.bottom-menu {
  a {
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--icon-color);
    background-color: white;
    height: 100%;
    border-left: solid 2px transparent;
    transition: all 0.4s;
    i {
      margin-left: -2px;
    }
    height: 66px;
    &:hover {
      background-color: var(--accent-hover-color);
      color: var(--accent-color);
    }
    &.router-link-active {
      background-color: var(--second-bg-color);
      border-left: solid 2px var(--accent-color);
      color: var(--accent-color);
    }
  }
}
.top-submenu {
  grid-area: top-submenu;
  display: grid;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px #d9d9d9;
  z-index: 1;
}
.bottom-submenu {
  grid-area: bottom-submenu;
  box-shadow: 3px 4px 6px #d9d9d9;
  overflow: auto;
  height: calc(100vh - var(--nav-height));
  padding-bottom: 30px;
  box-sizing: border-box;
  h2 {
    margin: 32px 0;
    text-align: center;
  }
  a {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    align-items: center;
    height: 45px;
    margin: 2px 14px;
    text-decoration: none;
    color: #4d4d4d;
    background: var(--second-bg-color);
    font-size: 13px;
    letter-spacing: 0.75px;
    border-radius: 3px;
    &.router-link-active,
    &.router-link-active i {
      background: var(--accent-color);
      color: white;
    }
    &:hover:not(.router-link-active) {
      background-color: var(--accent-hover-color);
    }
    i {
      width: 64px;
      text-align: center;
      color: var(--icon-color);
    }
  }
}
</style>