
import axios from 'axios';
import { createBrowserHistory } from 'history';
const Api = axios.create({
    baseURL: '/api',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'X-Platform': 'web',
    },
    xsrfCookieName: 'STRATUS-XSRF-TOKEN',
    xsrfHeaderName: 'STRATUS-XSRF-TOKEN',
  });
  Api.interceptors.request.use(
    (config) => {
      config.baseURL = '/api';
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = 'Bearer  ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
        return Promise.reject(error);
    },
    );
    
    Api.interceptors.response.use(
        (response) => {
        // const token = localStorage.setItem('token',response.data.token.token);
        // console.log('vvdsd',token);
        // console.log('vv',response.data.token.token);
      return response.data;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 419) {
        localStorage.clear();
        // const history = createBrowserHistory({ forceRefresh: true });
        // if (checkUnauthRoute(history.location.pathname) === false) {
        //   history.push('/');
        // }
      }
      const generic_error = 'Something went wrong.';
  
      /**
       * Api sends an error message in the format
       * { error: error_message }
       */
      if (error.response && error.response.data) {
        /**
         * If the error is NOT initiated from the Api (ie: for express/cloudflare errors)
         * then use generic error message for toast message and pass error info to sentry
         */
        if (typeof error.response.data === 'string') {
          const newData = {
            error: generic_error,
            info: error.response.data,
          };
          return Promise.reject(newData);
        }
        return Promise.reject(error.response);
      }
  
  
      if (error.message === 'Network Error') {
        error.message = offline_error;
      }
      return Promise.reject(error.message);
    },
  );
    export default Api;