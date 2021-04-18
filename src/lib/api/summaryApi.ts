import request from '.';

const summaryApi = {
  get: {
    key: 'getSummary',
    exec: () => request.get('/summary'),
  },
};

export {summaryApi};
