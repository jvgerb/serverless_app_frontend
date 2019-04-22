<template>
  <nav>
    <div class="menu">
      <div class="top-menu">
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
      </div>
      <div class="middle-menu">
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#" class="active">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
      </div>
      <div class="bottom-menu">
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>
        </a>
      </div>
    </div>
    <div class="submenu">
      <div class="top-submenu"></div>
      <div class="bottom-submenu">
        <h2>POD</h2>
        <a href="#">
          <i class="icon-no-icon"></i>POD
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>Distribution Network
        </a>
        <a href="#" class="active">
          <i class="icon-no-icon"></i>District Heating Station
        </a>
        <a href="#">
          <i class="icon-no-icon"></i>Actuator
        </a>
      </div>
    </div>
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
  grid-template-rows: 85px auto 150px;
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
  grid-template-rows: 85px auto;
  grid-template-areas:
    'top-submenu'
    'bottom-submenu';
}

.top-menu {
  grid-area: top-menu;
  height: var(--nav-height);
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 0px #d9d9d9;
  z-index: 1;

  a {
    text-decoration: none;
    color: #cdc0b8;
    background-color: white;
  }
}

.middle-menu {
  grid-area: middle-menu;
}

.bottom-menu {
  grid-area: bottom-menu;
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

    &.active {
      background-color: var(--second-bg-color);
      border-left: solid 2px var(--accent-color);
      color: var(--accent-color);
    }
  }
}

.top-submenu {
  grid-area: top-submenu;
  box-shadow: 0px 1px 0px #d9d9d9;
}

.bottom-submenu {
  grid-area: bottom-submenu;
  box-shadow: 3px 0px 6px #d9d9d9;
  z-index: 1;
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
    padding: 0 20px;
    text-decoration: none;
    color: #4d4d4d;
    background: var(--second-bg-color);
    font-size: 13px;
    border-radius: 3px;
    &.active,
    &.active i {
      background: var(--accent-color);
      color: white;
    }
    &:hover:not(.active) {
      background-color: var(--accent-hover-color);
    }
    i {
      margin-right: 24px;
      color: #cdc0b8;
    }
  }
}
</style>
