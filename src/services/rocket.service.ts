import { fetchWrapper } from "helpers"

const apiUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/api" // development api
  : "http://localhost:3000/api" // production api

export {
  apiUrl,
}

export const rocketService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
}

const baseUrl = `${apiUrl}/rockets`

function getAll () {
  return fetchWrapper.get(baseUrl)
}

function getById (id: string) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function create (params: string) {
  return fetchWrapper.post(baseUrl, params)
}

function update (id: string, params: string) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete (id: string) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}
