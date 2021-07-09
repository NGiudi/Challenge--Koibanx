import clientAxios from './axios';

function adapterResponse (data) {
  const rowsPerPage = 10;
  return ({
    data,
    page: 1,
    pages: Math.ceil(data.length / rowsPerPage),
    rowsPerPage,
    total: data.length
  });
}

const getCommerce = async (url) => {
  console.log(process.env.REACT_APP_URL_BASE + url);
  const res = await clientAxios.get (url);
  return res.data;
}

export default getCommerce;