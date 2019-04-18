<template>
  <nav>
    <ul class="tabs-side">
      <li class="active">
        <a href="#">Control Unit</a>
      </li>
      <li>
        <a href="#">Control Unit List</a>
      </li>
      <li>
        <a href="#">Repair List</a>
      </li>
      <li>
        <a href="#">Summary</a>
      </li>
    </ul>
    <ul class="account-side">
      <li>
        <input ref="searchInput" v-show="searchVisible" class="search-input" type="text">
        <i @click="toggleSearchInput()" class="icon-no-icon"></i>
      </li>
      <li>
        <img src="@/assets/img/account.png" alt="Account">
        <span class="badge">9+</span>
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
export default class Navbar extends Vue {
  searchVisible = false;

  toggleSearchInput() {
    this.searchVisible = !this.searchVisible;
    setTimeout(() => (this.$refs.searchInput as HTMLInputElement).focus());
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-columns: auto 200px; //66px 297px
  background: var(--nav-bg-gradient);
}
ul {
  height: var(--nav-height);
}
.account-side {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-around;
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
    line-height: 1.7;
    position: absolute;
    top: -10px;
    right: -20px;
    background-color: #bc2026;
  }
}
.tabs-side {
  li {
    min-width: 40px;
    display: inline-block;
    height: 43px;
    margin-left: 5px;
    align-self: center;
    margin-top: 42px;
    line-height: 3;
    background-color: transparent;
    a {
      border-radius: 3px 3px 0 0;
      padding: 0 30px;
      color: white;
      text-decoration: none;
      display: block;
      height: 100%;
      transition: all 0.4s;
    }
    &.active a,
    a:hover {
      background-color: var(--second-bg-color);
      color: black;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
.search-input {
  position: absolute;
  top: 0px;
  right: 40px;
  height: 26px;
  width: 200px;
}
</style>
