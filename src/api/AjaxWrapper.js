export const getRequest = async (url) => {
  let response = await fetch(url);
  if (response.ok) {
      let responseData = await response.json();
      return responseData;
  }
  return null;
};