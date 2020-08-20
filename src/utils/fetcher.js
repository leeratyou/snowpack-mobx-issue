// /* eslint-disable */
// import { Fetcher, takeJson } from '@supersimplethings/fetcher'
// // import { snakeCase, camelCase } from 'change-case'//TODO Did we need it?
// // import RNConfig from 'react-native-config'
//
// // const {
// //   API_MEKOMI_BASE_URL,
// //   X_ZUMO_APPLICATION,
// //   API_NEW_MEKOMI_BASE_URL
// // } = RNConfig || {}
//
// //TODO get from env
// const API_MEKOMI_BASE_URL=`https://mekomitesting.azure-mobile.net`
// const options = {
//   stripRegexp: /[^-A-Z0-9]+/gi
// }
//
// // const toSnakeCase = keyConvert(input => snakeCase(input, options))//TODO Did we need it?
// // const toCamelCase = keyConvert(input => camelCase(input, options))//TODO Did we need it?
//
//
// const apis = {
//   mekome: {
//     name: 'mekome',
//     // domain: API_MEKOMI_BASE_URL||'https://mekomitesting.azure-mobile.net',
//     domain: API_MEKOMI_BASE_URL,
//     endpoints: {
//       sync: () => '/api/Sync5',
//       message: () => '/api/Message'
//     }
//   }
// }
//
//
// export const fetcher = () => new Fetcher(apis)
//   .useApi('mekome')
//   .setOptions({
//     headers: {
//       'X-ZUMO-APPLICATION': X_ZUMO_APPLICATION,
//       'X-ZUMO-FEATURES': 'AJ'
//     }
//   })
//
//
//   const newApis = {
//     newMekome: {
//       name: 'newMekome',
//       domain: API_NEW_MEKOMI_BASE_URL,
//       endpoints: {
//         getOrgs: (userId) => `/api/v1/getOrgsByMekomiUserId/${userId}`,
//       }
//     }
//   }
//
//
// export const newServerfetcher = () => new Fetcher(newApis)
//   .useApi('newMekome')
//   .setOptions({
//   })
