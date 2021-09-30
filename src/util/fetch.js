import useFetch from "use-http";

export function Fetch() {
  const { get, post, del, put } = useFetch();
  // return {
  //   get: (url, data) => {},
  //   formPost: (url, formData) => {},
  //   post: (url, data) => {},
  //   del: (url, data) => {},
  //   put: (url, data) => {},
  // };
  return { get, post, del, put };
}
export default Fetch;
