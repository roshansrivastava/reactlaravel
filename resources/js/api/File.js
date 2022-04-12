import axios from 'axios';
/* Create axios instance */
const File = (url, data) => axios({
    url: url,
    method: 'POST',
    responseType: 'blob', // Important
    data: {
      ...data
    },
    xsrfCookieName: 'STRATUS-XSRF-TOKEN',
    xsrfHeaderName: 'STRATUS-XSRF-TOKEN',
  });
  
  export default File;
  