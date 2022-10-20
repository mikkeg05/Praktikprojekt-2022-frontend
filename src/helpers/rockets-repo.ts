/* eslint-disable import/no-absolute-path */
/* eslint-disable @typescript-eslint/no-var-requires */

// import fs from "fs"

// let rockets = require("/data/rockets.json")

// export const rocketsRepo = {
//   getAll: () => rockets,
//   getById: (id: { toString: () => string }) => rockets.find((x: { id: { toString: () => string } }) => x.id.toString() === id.toString()),
//   find: (x: string) => rockets.find(x),
//   create,
//   update,
//   delete: _delete,
// }
// function create (rocket: { id: number; lenght: unknown; dateCreated: string; dateUpdated: string }) {
//   rocket.id = rocket.lenght ? Math.max(...rockets.map((x: { id: string }) => x.id)) + 1 : 1
//   rocket.dateCreated = new Date().toISOString()
//   rocket.dateUpdated = new Date().toISOString()
//   rockets.push(rocket)
// }

// function update (id: { toString: () => string }, param: string) {
//   const rocket = rockets.find((x: { id: { toString: () => string } }) => x.id.toString() === id.toString())
//   rocket.dateUpdated = new Date().toISOString()
//   Object.assign(rocket, param)
//   saveData()
// }

// function _delete (id: { toString: () => string }) {
//   rockets = rockets.filter((x: { id: { toString: () => string } }) => x.id.toString() !== id.toString())
//   saveData()
// }

// function saveData () {
//   fs.writeFileSync("data/rockets.json", JSON.stringify(rockets, null, 4))
// }

export const RocketsRepo = {}
