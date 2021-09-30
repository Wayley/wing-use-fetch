import React, { useContext, createContext, useState } from "react";
import { Provider } from "use-http";

import { Fetch } from "./util/fetch";
import { queryParams, getFormData } from "./util/method";

const fetchContext = createContext();

function useProviderFetch(common) {
  const { get, post, del, put } = Fetch();
  return {
    get: (url) => {
      if (common) {
        let extra = queryParams(common);
        if (url.indexOf("?") > -1) {
          url += `&${extra}`;
        } else {
          url += `?${extra}`;
        }
      }
      return get(url);
    },
    formPost: (url, data) => {
      return post(url, getFormData({ ...common, ...data }));
    },
    post: (url, data) => {
      return post(url, { ...common, ...data });
    },
    del: (url, data) => {
      return del(url, { ...common, ...data });
    },
    put: (url, data) => {
      return put(url, { ...common, ...data });
    },
  };
}

export function FetchProvider({ basename = "", options = {}, children }) {
  const { commonParams, ...rest } = options || { commonParams: {} };
  const value = useProviderFetch(commonParams);
  return (
    <fetchContext.Provider value={value}>
      <Provider url={basename} options={rest}>
        {children}
      </Provider>
    </fetchContext.Provider>
  );
}

export function useFetch() {
  return useContext(fetchContext);
}
export default useFetch;
