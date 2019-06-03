import awsAuth from './awsExport';

import { Cache } from 'aws-amplify';

export const clearStorage = async () => {
  const federatedInfo = Cache.getItem('federatedInfo');

  if (federatedInfo) {
    localStorage.removeItem('amplify-signin-with-hostedUI');
    return Object.keys(localStorage).filter(ls => ls.startsWith('aws')).forEach(ls => localStorage.removeItem(ls));
  } else {
    localStorage.removeItem('amplify-signin-with-hostedUI');
    Object.keys(localStorage).filter(ls => ls.startsWith('aws')).forEach(ls => localStorage.removeItem(ls));
    return Object.keys(localStorage).filter(ls => ls.startsWith(`CognitoIdentityServiceProvider.${awsAuth.userPoolWebClientId}`)).forEach(ls => localStorage.removeItem(ls));
  }

}

