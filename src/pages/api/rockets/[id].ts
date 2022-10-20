// --- api / rockets / [id]
import { NextApiRequest, NextApiResponse } from "next"
import { rockets } from "../../../../rocketdata"
import { Rocket } from "../../../types/rocket.model"

type ResponseError = {
  message: string
}

export default function rocketHandler (
  req: NextApiRequest,
  res: NextApiResponse<Rocket | ResponseError>,
) {
  const { query } = req
  const { id } = query
  const filtered = rockets.filter((p) => p.id === id)

  // Rocket with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0]) // ignore error pls
    : res.status(404).json({ message: `Rocket with id: ${id} not found.` })
}
