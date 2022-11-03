import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { socials } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<socials[]>
) {
  const socials = await prisma.socials.findMany();
  res.status(200).json(socials);
}
