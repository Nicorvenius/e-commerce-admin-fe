// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'https://e-commerce-5jch.onrender.com/api/',
  // apiURL: 'http://localhost:3000/api/',
  // socketIoUrl: 'https://api.diststudy.dev/chat'
  socketIoUrl: 'http://localhost:3000/chat',
  AUTH_API_VERSION: 1,
  appPurchaseUrl: '',
  appThemeName: 'ecommerce',
  appDemos: '',
  appPreviewUrl: '',
  appVersion: '0'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
