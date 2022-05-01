// fetching the GET route from the Express server which matches the GET route from server.js
const getData = async (path) => {
  try {
    // const response = await fetch(resource[, options]);
    const response = await fetch(path);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  } catch (e) {
    throw e;
  }
};
export default getData;