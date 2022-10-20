import { NextApiResponse, NextApiRequest } from "next"
import { rockets } from "../../../../rocketdata"
import { Rocket } from "../../../types/rocket.model"

export default function handler (
  _req: NextApiRequest,
  res: NextApiResponse<Rocket[]>,
) {
  return res.status(200).json(rockets)
}
