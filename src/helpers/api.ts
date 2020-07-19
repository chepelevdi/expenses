const apiClient = <T>({
  endpoint = '',
  customConfig = {},
  method,
  body,
  customEndPoint,
}: {
  endpoint?: string;
  customEndPoint?: string;
  customConfig?: {
    headers?: {
      [key: string]: string;
    };
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH';
  body?: {};
}): Promise<T> => {
  const isFormData = body && body instanceof FormData;
  const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
  const config: {
    [key: string]: any;
  } = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = isFormData ? body : JSON.stringify(body);
  }

  return window
    .fetch(
      `${customEndPoint || process.env.REACT_APP_API_URL}/${endpoint}`,
      config,
    )
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export default apiClient;
