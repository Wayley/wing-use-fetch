export function queryParams(query) {
  if (!query || typeof query !== "object") return "";
  let result = "";
  for (const key in query) {
    if (Object.hasOwnProperty.call(query, key)) {
      result += `${key}=${query[key]}`;
    }
  }
  return result;
}

export function getFormData(data) {
  let formData = new FormData();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      formData.append(key, data[key]);
    }
  }
  return formData;
}
export default { queryParams };
