<template>
  <styled-container>
    <styled-card>
      <styled-toolbar color="white">
        <styled-title>Sign In Account</styled-title>
      </styled-toolbar>
      <styled-card-text>
        <form>
          <label class="form--label">Username *</label>
          <div class="wrapper--input">
            <input
              class="form--input"
              id="username"
              v-model="username"
              name="username"
              placeholder="Enter your username"
              type="text"
            />
          </div>

          <label class="form--label">Password *</label>
          <div class="wrapper--input">
            <input
              class="form--input"
              id="password"
              v-model="password"
              name="password"
              placeholder="Enter your username"
              type="password"
            />
          </div>
        </form>
      </styled-card-text>
      <styled-card-actions>
        <button class="button--signin" id="login" @click="handleSignIn">Sign in</button>
      </styled-card-actions>
      <span class="error" v-if="errorMessage !== ''">{{ errorMessage }}</span>
    </styled-card>

    <loading :show="signedIn"></loading>
    <button v-on:click="signInWithGoogle">Sign in with Google</button>
  </styled-container>
</template>

<script>

import { Auth } from 'aws-amplify';
import loading from 'vue-full-loading';

import StyledContainer from '@/styleguide/Container/Container';
import StyledCard from '@/styleguide/Card/Card';
import StyledCardText from '@/styleguide/Card/CardText';
import StyledToolbar from '@/styleguide/Toolbar/Toolbar';
import StyledTitle from '@/styleguide/Title/Title';
import StyledCardActions from '@/styleguide/Card/CardActions';

function onCreated() {
  this.interval = setInterval(() => {
    Auth.currentAuthenticatedUser()
      .then(() => this.$router.push({ path: '/InvoiceList' }))
      // eslint-disable-next-line
      .catch((error) => console.log(error));
  }, 1500);
}

function onDestroy() {
  clearInterval(this.interval);
}

export default {
  name: 'Auth',
  components: {
    loading,
    StyledContainer,
    StyledCard,
    StyledCardText,
    StyledToolbar,
    StyledTitle,
    StyledCardActions
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      signedIn: false
    };
  },

  methods: {

    async handleSignIn() {

      try {

        this.signedIn = true;
        this.errorMessage = '';

        await Auth.signIn(this.username, this.password);

        this.signedIn = false;
        this.$router.push({ path: '/InvoiceList' });

      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
        this.errorMessage = error.message ? error.message : error;
        this.signedIn = false;
      }
    },

    async signInWithGoogle() {
      await Auth.federatedSignIn({ provider: 'Google' });
    }
  },

  created: onCreated,
  destroyed: onDestroy
};
</script>

<style lang="scss" scoped>
  .error {
    color: #C30016;
  }

  .wrapper--input {
    margin: 0;
    padding: 0 12px;
    margin-top: 8px;
    margin-bottom: 30px;

    width: 100%;
    min-height: 56px;
    border: 1px solid var(--lightGrey);
    font-size: 14px;
    border-radius: 3px;
    box-sizing: border-box;
  }

  .header-title {
    display: block;
    margin-top: 0px;
    padding-right: 0px;
    padding-left: 0px;

    transform: translateY(0px);
    background-color: #fff!important;
    border-color: #fff!important;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important;
  }

  .form--input {
    margin-top: 10px;
    max-height: 32px;
    padding: 8px 0;

    max-width: 100%;
    min-width: 0;
    width: 100%;
    background-color: transparent;
    border-style: none;
    border-radius: 0;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .button--signin {
    min-width: 130px;
    margin-bottom: 0;
    font-size: 12px;

    height: 36px;
    color: white;
    text-align: center;
    cursor: pointer;
    background-color: #C30016 !important;
    border-color: #ccc;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }

  .form--label {
    font-family: 'energicos-semibold';
    font-size: 14px;
    margin-bottom: 10px;

    color: rgba(0,0,0,.54);
    line-height: 1;
    min-height: 8px;
  }

</style>

