export default {
  identityPoolId: 'eu-west-1:92545837-22da-40d6-940c-8e66edd23c2d',
  region: 'eu-west-1',
  userPoolId: 'eu-west-1_Nf1wQUQxG',
  userPoolWebClientId: '4ag9anonq75r6ipefai8k50a13',
  mandatorySignIn: false,
  oauth: {
    domain: 'auth.acqeos.net',
    scope: ['phone', 'email', 'openid'],
    redirectSignIn: process.env.VUE_APP_REDIRECT_SIGN_IN,
    redirectSignOut: process.env.VUE_APP_REDIRECT_SIGN_OUT,
    clientID: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    responseType: 'token',
    options: {
      AdvancedSecurityDataCollectionFlag: false,
    },
  },
};
