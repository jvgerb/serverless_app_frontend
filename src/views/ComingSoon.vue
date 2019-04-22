<template>
  <div>
    <h2 v-if="$route.params.tab">{{word()}}...</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ComingSoon extends Vue {
  word() {
    const words = [
      'Not implemented',
      'Unsupported',
      'Not supported yet',
      'Coming soon',
      'Implementation will be done in the future',
      'See you in the future',
      'Not ready yet',
      'It is not done',
      'Still not prepared',
    ];

    return words[Math.floor(Math.random() * Math.floor(words.length))];
  }
}
</script>

<style lang="scss" scoped>
</style>
