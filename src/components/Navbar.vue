<template>
  <nav>
    <div class="tabs-side">
      <router-link
        v-for="route in tabRoutes"
        :key="route.name"
        :to="'/'+$route.params.menu +'/'+$route.params.submenu+'/'+ route.link"
      >{{route.name}}</router-link>
    </div>
    <div class="account-side">
      <i @click="showSearchInput()" class="icon-search"></i>
      <i class="icon-logout" @click="signOut()"></i>
    </div>
    <div class="search-overlay" v-show="searchVisible" @mousedown="searchVisible = false">
      <div class="input-field" @mousedown.stop>
        <input ref="searchInput" v-model="searchValue" type="text" placeholder="SEARCH">
        <i class="icon-close" @click="searchVisible = false"></i>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Auth } from 'aws-amplify';
import { Component, Vue } from 'vue-property-decorator';
import { routes } from '../views/views-routes';
import { AmplifyEventBus } from 'aws-amplify-vue';
@Component({
  components: {},
})
export default class Navbar extends Vue {
  searchVisible = false;
  searchValue = '';
  get searchInput() {
    return this.$refs.searchInput as HTMLInputElement;
  }
  get tabRoutes() {
    const menuRoute =
      this.$route.params.menu &&
      routes.find((x: any) => this.$route.params.menu.toLowerCase() == x.link);
    const submenuRoute =
      menuRoute &&
      this.$route.params.submenu &&
      menuRoute.routes.find(
        (x: any) => this.$route.params.submenu.toLowerCase() == x.link
      );
    return (submenuRoute && submenuRoute.routes) || [];
  }
  showSearchInput() {
    this.searchVisible = true;
    setTimeout(() => this.searchInput.focus());
  }
  signOut() {
    localStorage.clear();
    this.$store.state.signedIn = false;
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-columns: auto 120px;
  position: sticky;
  top: 0;
  height: var(--nav-height);
  background: var(--nav-bg-gradient);
  z-index: 1;
  .search-overlay {
    position: fixed;
    top: 0px;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000020;
    .input-field {
      position: absolute;
      top: 50px;
      right: 10vw;
      height: 70px;
      width: calc(
        100% - var(--sidebar-menu-width) - var(--sidebar-submenu-width) - 20vw
      );
    }
    input {
      background: white;
      padding: 0 28px;
      width: 100%;
      height: 100%;
      font-size: 18px;
      border-radius: 4px;
      letter-spacing: 0.75px;
      box-shadow: 0 0 4px 0px #bababa;
      &::placeholder {
        font-size: 12px;
      }
    }
    i {
      font-size: 30px;
      position: absolute;
      top: 20px;
      right: 20px;
      color: #777;
      cursor: pointer;
    }
  }
}
.account-side {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  height: var(--nav-height);
  color: white;
  padding-right: 20px;
  i {
    cursor: pointer;
    padding: 10px 1px;
    text-align: center;
    border-radius: 10px;
    transition: all 0.4s;
    &:hover {
      background: #00000030;
    }
    &:active {
      background: #00000040;
    }
  }
}
.tabs-side {
  white-space: nowrap;
  a {
    display: inline-block;
    height: 43px;
    margin-top: 42px;
    line-height: 43px;
    border-radius: 3px 3px 0 0;
    padding: 0 30px;
    text-decoration: none;
    transition: all 0.4s;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #4d4d4d;
    background-color: #e5e3e3;
    margin-left: 1px;
    &:first-child {
      margin-left: 5px;
    }
  }
  a.router-link-active {
    background-color: var(--second-bg-color);
    color: black;
  }
  a:hover:not(.router-link-active) {
    background-color: var(--accent-hover-color);
    color: black;
  }
}
</style>
