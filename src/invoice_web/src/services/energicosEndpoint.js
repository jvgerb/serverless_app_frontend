export const getAPIEndpoint = () => {
  const isLocalHostEnvironment = location.hostname && location.hostname.includes('localhost');

  // This endpoint is the default one and is going to be used inside AWS
  let API_URL = `https://api.acqeos.net`;
  
  if (isLocalHostEnvironment) {
    console.log('is localhost');
  } else {
    console.log('is aws env');
  }

  return API_URL;
};
