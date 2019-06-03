<template>
  <div class="authentication" :class="{loading}" @click="initLoader()">
    <a href="#" @click="signInWithGoogle()" class="sign-in-google">Sign in with Google</a>
    <amplify-authenticator :authConfig="authConfig" ref="authenticator" class="authentificator"></amplify-authenticator>
    <!-- <amplify-sign-in class="authentication"></amplify-sign-in> -->
    <img ref="loader" src="@/assets/img/loader.svg" alt="Loading..." class="loader">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import { Logger } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import {
  FederatedSignInOptionsCustom,
  CognitoHostedUIIdentityProvider,
} from '@aws-amplify/auth/lib/types';
@Component({
  components: { ...components },
})
export default class SignIn extends Vue {
  loading = false;
  authenticator: any;
  authConfig = {
    signInConfig: {
      isSignUpDisplayed: false,
    },
  };
  async beforeCreate() {
    AmplifyEventBus.$on('authState', (info: any) =>
      setTimeout(() => (this.loading = false), 1000)
    );
    // hash to object
    // convert #key=value&foo=bar to {key:'value', foo:'bar'}
    const googleSignIninfo = this.$route.hash
      .split('&')
      .map(x => x.split('='))
      .reduce((o: any, x) => ((o[x[0]] = x[1]), o), {});
    if (googleSignIninfo.id_token) {
      console.log('googleSignIninfo', googleSignIninfo);
      setTimeout(() => (this.$store.state.signedIn = true));
    }
  }
  async mounted() {
    this.initGapi();
    this.initLoader(true);
  }
  initLoader(force: boolean) {
    if (
      this.authenticator &&
      this.authenticator == (this.$refs.authenticator as any).$children[0]
    ) {
      return;
    }
    // this timeout needs to wait for authenticator elements loading
    setTimeout(() => {
      const self = this;
      this.authenticator = this.$refs.authenticator as any;
      if (!this.authenticator || !this.authenticator.$children[0]) {
        return;
      }
      this.authenticator = this.authenticator.$children[0];
      const originalFunc = this.authenticator.setError;
      this.authenticator.setError = function() {
        // this timeout needs for not annoying with circle loader flashing
        setTimeout(() => {
          originalFunc.apply(this.authenticator, arguments);
          self.loading = false;
        }, 1000);
      };
      const loader = this.$refs.loader as any;
      const button = document.querySelector('button') as any;
      button.addEventListener('click', (e: any) => {
        loader.style.top = button.getBoundingClientRect().y + 'px';
        this.loading = true;
      });
    });
  }
  async signInWithGoogle() {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }
  initGapi() {
    const g = (window as any).gapi;
    g.load('auth2', function() {
      g.auth2.init({
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        scope: 'email openid',
      });
    });
  }
}
</script>

<style lang="scss">
.authentication {
  .sign-in-google {
    $form-offset: 220px;
    position: absolute;
    top: calc(50% + #{$form-offset});
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .authentificator {
    [class^='Form__formSection___'] {
      width: 460px;
      top: calc(50% - 10px);
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.15);
    }
    a {
      color: blue;
    }
    button {
      background-color: var(--accent-color);
      cursor: pointer;
      transition: all 0.4s;
      min-height: 46px;
      height: 46px;
      &:active {
        background-color: var(--accent-color);
        opacity: 0.9;
      }
    }
    .error {
      background-color: white !important;
      color: red;
      width: 210px;
      overflow: auto;
      max-height: 75px;
    }
  }
  .loader {
    $button-offset: 144px;
    width: 46px;
    height: 46px;
    position: absolute;
    // top: calc(50% + 98px);
    left: calc(50% + #{$button-offset});
    display: none;
  }
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    button {
      min-width: 46px;
      font-size: 10px;
      display: block;
      border-radius: 30px;
      opacity: 0;
    }
    .loader {
      display: block;
    }
  }
}
</style>
