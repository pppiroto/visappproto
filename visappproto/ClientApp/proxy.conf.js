const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:10021';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/simpledataaccess",
      "/ormdataaccess",
      "/Employees",
      "/Actor",
      "/Autocomplete/EmployeeFirstname",
      "/Autocomplete/EmployeeJobIdList"
   ],
    target: target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
