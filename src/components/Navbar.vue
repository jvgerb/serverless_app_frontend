<template>
  <nav>
    <div class="tabs-side">
      <router-link
        v-for="route in tabRoutes"
        :key="route.name"
        :to="'/'+$route.params.menu +'/'+$route.params.submenu+'/'+ route.link"
      >{{route.name}}</router-link>
    </div>
    <ul class="account-side">
      <li>
        <input ref="searchInput" v-show="searchVisible" class="search-input" type="text">
        <i @click="toggleSearchInput()" class="icon-search"></i>
      </li>
      <li>
        <img src="@/assets/img/account.png" alt="Account">
        <span class="badge">9+</span>
      </li>
      <li>
        <i class="icon-logout"></i>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { routes } from '../views/views-routes';

@Component({
  components: {},
})
export default class Navbar extends Vue {
  searchVisible = false;

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

  toggleSearchInput() {
    this.searchVisible = !this.searchVisible;
    setTimeout(() => (this.$refs.searchInput as HTMLInputElement).focus());
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-columns: auto 200px;
  position: sticky;
  top: 0;
  height: var(--nav-height);
  background: var(--nav-bg-gradient);
  z-index: 1;
}

.account-side {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-around;
  height: var(--nav-height);
  color: white;
  li {
    position: relative;
    cursor: pointer;
  }
  img {
    width: 46px;
    height: 46px;
    background: white;
    border-radius: 15px;
  }
  .badge {
    display: inline-block;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 2;
    position: absolute;
    top: -10px;
    right: -20px;
    background-color: #bc2026;
  }
  .search-input {
    position: absolute;
    top: 0px;
    right: 40px;
    height: 26px;
    width: 200px;
    background-color: white;
    color: black;
  }
}
.tabs-side {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  a {
    display: inline-block;
    height: 43px;
    margin-left: 5px;
    margin-top: 42px;
    line-height: 43px;
    border-radius: 3px 3px 0 0;
    padding: 0 30px;
    color: white;
    text-decoration: none;
    transition: all 0.4s;
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
