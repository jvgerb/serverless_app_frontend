<template>
  <Navbar></Navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: { Navbar },
})
export default class Home extends Vue {}
</script>
