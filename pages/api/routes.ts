import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { routes } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<routes[]>
) {
  const routes = await prisma.routes.findMany();
  res.status(200).json(routes);
}
