<template>
  <div>
    <v-app v-if="$store.state.signedIn">
      <router-view/>
    </v-app>
    <SignIn v-else></SignIn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';
import SignIn from './views/auth/SignIn.vue';
@Component({
  components: { SignIn },
})
export default class App extends Vue {
  user: any;
  async mounted() {
    try {
      this.user = await Auth.currentAuthenticatedUser();
      console.log(this.user);
      this.$store.state.signedIn = true;
    } catch (err) {
      this.$store.state.signedIn = false;
    }
    AmplifyEventBus.$on('authState', async (info: any) => {
      this.$store.state.signedIn = info === 'signedIn';
    });
  }
}
</script>


<style lang="scss">
@import 'assets/scss/app';
</style>
