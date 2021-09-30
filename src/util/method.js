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
export default { queryParams };
