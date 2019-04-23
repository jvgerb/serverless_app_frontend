<template>
  <nav>
    <div class="menu">
      <div class="top-menu">
        <a href="#">
          <i class="icon-hamburger"></i>
        </a>
      </div>
      <div class="middle-menu">
        <router-link v-for="route in menuRoutes" :key="route.name" :to="'/'+route.link">
          <i :class="[`icon-${route.icon || 'no-icon'}`]"></i>
        </router-link>
      </div>
      <div class="bottom-menu">
        <a href="#">
          <i class="icon-settings"></i>
        </a>
        <a href="#">
          <i class="icon-quiz"></i>
        </a>
      </div>
    </div>
    <div class="submenu">
      <div class="top-submenu">
        <img src="../assets/img/logo.svg" alt>
      </div>
      <div class="bottom-submenu">
        <h2>{{$route.params.menu}}</h2>
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
import { routes } from '../views/views';

@Component({
  components: {},
})
export default class Sidebar extends Vue {
  get menuRoutes() {
    return routes;
  }

  get submenuRoutes() {
    const menuRoute =
      this.$route.params.menu &&
      routes.find((x: any) => this.$route.params.menu.toLowerCase() == x.link);

    return (menuRoute && menuRoute.routes) || [];
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-columns: 66px 300px;
  grid-template-rows: auto;
  grid-template-areas: 'menu submenu';
  height: 100vh;
  position: sticky;
  top: 0;
}

.menu {
  grid-area: menu;
  display: grid;
  grid-template-columns: 66px;
  grid-template-rows: var(--nav-height) auto 150px;
  grid-template-areas:
    'top-menu'
    'middle-menu'
    'bottom-menu';
  box-shadow: 1px 0px 6px #d9d9d9;
}

.submenu {
  grid-area: submenu;
  display: grid;
  grid-template-columns: 300px;
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
  i {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: black;
    background-color: white;
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
}

.middle-menu,
.bottom-menu {
  a {
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #cdc0b8;
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
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px #d9d9d9;
}

.bottom-submenu {
  grid-area: bottom-submenu;
  box-shadow: 3px 0px 6px #d9d9d9;
  overflow: auto;
  height: calc(100vh - var(--nav-height));
  padding-bottom: 30px;
  box-sizing: border-box;
  h2 {
    margin: 32px 0;
    text-align: center;
    text-transform: uppercase;
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
      color: #cdc0b8;
    }
  }
}
</style>
