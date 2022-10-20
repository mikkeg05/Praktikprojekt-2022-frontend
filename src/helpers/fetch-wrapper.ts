export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
}

function get (url: RequestInfo | URL) {
  const requestOptions = { method: "GET" }
  return fetch(url, requestOptions).then(handleResponse)
}

function post (url: RequestInfo, body: string) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function put (url: RequestInfo | URL, body: string) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function _delete (url: RequestInfo | URL) {
  const requestOptions = { method: "DELETE" }
  return fetch(url, requestOptions).then(handleResponse)
}

function handleResponse (response: { text: () => Promise<string>; ok: unknown; statusText: string }) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
