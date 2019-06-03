const awsAuth = {
  identityPoolId: 'eu-west-1:92545837-22da-40d6-940c-8e66edd23c2d',
  region: 'eu-west-1',
  userPoolId: 'eu-west-1_Nf1wQUQxG',
  userPoolWebClientId: '4ag9anonq75r6ipefai8k50a13',
  mandatorySignIn: false,
  oauth: {
    domain: "auth.acqeos.net",
    scope: ['phone', 'email', 'openid'],
    redirectSignIn: "https://inv.acqeos.net/InvoiceList",
    redirectSignOut: "https://inv.acqeos.net/Auth",
    clientID: '504027678672-he26a6hk5hc94vlsnjeue6nm81njoi6b.apps.googleusercontent.com',
    responseType: 'token',
    options: {
      AdvancedSecurityDataCollectionFlag: false
    }
  }
};

export default awsAuth;
