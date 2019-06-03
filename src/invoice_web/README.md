# Invoice Web

This Project was initiliazed using vue-cli `^3.4.0` version.

## Folder Structure

```text
Project Root/
│
├── public/
│   │── favicon.icon
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   └── styles/
│   │       └── pages/
│   │
│   ├── components/
│   │   ├── Commons/
│   │   ├── Filters/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Pages/
│   │   ├── Auth.vue
│   │   ├── Invoice.vue
│   │   ├── InvoiceCreate.vue
│   │   └── InvoiceList.vue
│   │
│   ├── router/
│   │
│   ├── schema/
│   │
│   ├── services/
│   │
│   ├── store/
│   │
│   ├── styleguide/
│   │
│   ├── App.vue
│   │
│   └── main.js
│
├── static/
```

## Technologies Used

### Styles

- scss
- css grid
- vue-styled-components - [Styles to components](https://github.com/styled-components/vue-styled-components)

### Format Date

- moment.js - [Momentjs](https://momentjs.com/)

### Popups window

- sweetalert2 - [Alert](https://sweetalert2.github.io/)

### Data structure utilities

- lodash - [lodash](https://lodash.com/)
- ramda  - [ramdajs](https://ramdajs.com/)

### AWS Authentication

- aws-amplify - [Auth](https://aws-amplify.github.io/)

### Routing

- vue-router - [router](https://router.vuejs.org/)

### Data Store

- vuex - [vuex](https://vuex.vuejs.org/)

### Data table

- v-data-table - [Vuetifyjs](https://vuetifyjs.com/en/)

## List of endpoints

| url                                                                                   | method  | remark                                   |
| ------------------------------------------------------------------------------------- | ------- | ---------------------------------------- |
| https://api.acqeos.net/v1/invoices/data/${invoiceId}                                  |   GET   | Display one invoice PDF                  |
| https://api.acqeos.net/v1/invoices/data/filters/${type}?sort=&page=1&per_page=999999  |   GET   | Display all of the invoices on the table |
| https://api.acqeos.net/v1/invoices/data/type-status/${type}/${status}                 |   GET   | List of all invoices that have already been processed |
| https://api.acqeos.net/v1/invoices/data                                               |   POST  | To save one invoice                      |
| https://api.acqeos.net/v1/invoices/data/batch-process                                 |   POST  | Send and Upload or Dry Run               |
| https://api.acqeos.net//v1/invoices/data/batch-process?ids=${invoices}                |   GET   | Download one/multiple pdf or zip invoice |

## Configuration of aws-amplify library for authentication flow

### Aws-amplify library

AWS Amplify provides a declarative and easy-to-use interface across different categories of cloud operations. AWS Amplify gets along well with any JavaScript based frontend workflow, and React Native for mobile developers.

The default implementation of this project works with Amazon Web Services (AWS), but AWS Amplify is designed to be open and pluggable for any custom backend or service.

> The Amazon Cognito Identity SDK for JavaScript is now part of the AWS Amplify Library.
In this project, we use the Feature Auth, which provides us with Authentication APIs.

### The `src/services/awsExport.js` file

All the users sign in and sign up is handled by AWS Cognito. After a successful login, a token will be retrieved. This token must be authorized by the same user pool that the API uses.
The following configuration contains all the data need to authenticate with AWS Amplify.

AWS Amplify is a project from AWS which intends to automate a lof of the most complex tasks that needs to be implemented inside an application e.g authentication flow with oauth2.
Amplify has a CLI but it wasn't used here. This is not an Amplify Project, but, some of the code is used in order to avoid the hassle of configuring this authentication flow manually.

```javascript
const awsAuth = {
  identityPoolId: 'eu-west-1:bd501dbd-ac42-4343-80a2-86e8b2e78d27',
  region: 'eu-west-1',
  userPoolId: 'eu-west-1_RZbLBaX2a',
  userPoolWebClientId: '52rojg6namhka12a0r4osj80nh',
  mandatorySignIn: false,
  oauth: {
    domain: "oauth.acqeos.net",
    scope: ['phone', 'email', 'openid'],
    redirectSignIn: "http://localhost:8080/InvoiceList",
    redirectSignOut: "http://localhost:8080/Auth",
    clientID: '504027678672-he26a6hk5hc94vlsnjeue6nm81njoi6b.apps.googleusercontent.com',
    responseType: 'code',
    options: {
      AdvancedSecurityDataCollectionFlag: false
    }
  }
};

export default awsAuth;
```

> Note: These settings will be used when you try to authenticate with the federated identity using the `federatedSignIn` function;

```javascript
Auth.federatedSignIn({ provider: 'Google' });
```

A Federated Identity is a third party social provider that also allows users to login into an app. The available options here are Google, Facebook and Amazon.
The invoicegenerator app uses Google only as a Social Identity Provider and uses cognito normal user/password mechanism to authenticate.

## NumberFilter

German numbers are formatted with comma as decimal seperator.
File `invoice_app/invoice_web/src/components/Filters/Utils.js` is a generic filter which can reduce the number of decimal places, replace the decimal seperator and seperate 1000th with a dot.
The filter is inside in `src/main.js` for different type of values and exported as `Vue.filter`.


| Type of value   | Display Filter       |
| --------------- | -------------------- |
| Finance numbers | Two decimal places   |
| MWh             | Three decimal places |
| m³              | No decimal places    |
| kWh             | No decimal places    |
| factors         | four decimal places  |
| Gas-factors | Nine decimal places

## Page 3

Page three is only printed when the tables have values. This fact is determined by a property called `page3.table1.billing_to_pe1_p1.length`. If that property is present, the page will be displayed

## Mapping with Frontend

The mapping between quantrix data model and html invoice fields is described in deail inside this [link](https://docs.google.com/spreadsheets/d/1-xSC4PqHzVjYFKtxHKGdZC96vHVC_1k4GJCZTVJWGDE/edit?ts=5cc05026#gid=6073456).

Vuejs has a concept called getters. A getter is a funciton that retrieves data from the state directly and allows you to format the data as the page needs. See `invoice_web/src/store/getters.js`.

The original schema of this tables is found at Quantrix.

## Deployment

```bash
make deploy_webapp
```

> This command is executed by the `deploy_invoicegen` script that is in the Makefile of the project root

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Authentication

![Auth](../../assets/web/auth.png)

### Auth Functionalities

1. You can sign into the app using `Cognito User Pool`.
2. You can sign into the app using `Identity Federated Pool`.

### Flow

1. Sign in with `Cognito User Pool`
   1. Enter the `username` and `password`
   2. The aws-amplify library will connect to AWS cognito using the `Auth.signIn(this.username, this.password)` function.
      2.1. Valid credentials
        2.1.1. Returns the JWT token
        2.1.2. Save the required data in `localStorage`
           - AccessToken
           - idToken
           - amplify-signin-with-hostedUI=`false`
           - LastAuthUser
        2.1.3. Page is redirected `InvoiceList`
      2.2. Invalid Credentials
         1. Page is redirected to `Auth`
   3. The pages routes are validated with data provided by aws-amplify
   4. In the `InvoiceList` page you have the option of `Logout`
      4.1. `Lougout`
         4.1.1. Clears all `localStorage` information
         4.1.2. It is redirected to the `Auth` page

2. Sign in with `Identity Federated Pool`
   1. Click `Sign in with Google`
   2. The aws-amplify library will connect in AWS cognito using the `Auth.federatedSignIn({ provider: 'Google' })`
      1. Valid credentials
         1. Returns the JWT token
         2. Save the required data in `localStorage`
            1. AccessToken
            2. idToken
            3. amplify-signin-with-hostedUI=`true`
            4. LastAuthUser
         3. It is redirect to the `InvoiceList` page
      2. Invalid Credentials
         1. It is redirected to the `Auth` page
   3. The pages routes are validated with data provided by aws-amplify
   4. In the `InvoiceList` page you have the option of `Logout`
      1. `Lougout`
         1. Clears all `localStorage` information
         2. It is redirected to the `Auth` page

## Dashboard screenshot

- `Invoices to be processed`
  - Number of items in invoice with the status `idle`
- `Invoices beeing processed`
  - Number of items in invoice with status `processing`
- `Invoices processed`
  - Number of items in invoice with status `done`

![InvoiceList](../../assets/web/invoiceList.png)

### Functionalities

1. A user can execute filter the list by `Invoice Id`.
2. A user can execute sort the fields by `Invoice ID`, `Sent`, `Status`, `Type` and `Process Date`.
3. A user can execute `view` one invoice.
4. A user can execute `download` one invoice pdf.
5. A user can execute `checkbox` one or multiple invoices.
6. A user can execute `create invoice`.
7. A user can execute choose `release` or `dryRun`.
