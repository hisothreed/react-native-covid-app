import Axios, {AxiosResponse, AxiosError, AxiosStatic} from 'axios';
import _ from 'lodash';

let client = Axios.create({});

const onSuccess = function (response: AxiosResponse) {
  console.log('Response:', response);
  return response.data;
};

const onError = function (error: AxiosError) {
  if (Axios.isCancel(error)) {
    return Promise.reject(error);
  }
  if (error.response) {
    console.log('Response:', error.response);
    console.log('Status:', error.response.status);
    console.log('Data:', error.response.data);
    console.log('Headers:', error.response.headers);
    return Promise.reject(error.response.data);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.log('Error Message:', error.message);
  }
  return Promise.reject(error);
};
client.interceptors.response.use(onSuccess, onError);

client.defaults.baseURL = 'https://api.covid19api.com';

const request = client as AxiosStatic;

export default request;
