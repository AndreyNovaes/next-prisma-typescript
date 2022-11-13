import { prisma } from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from "next";
import { socials } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<socials[] | socials>
) {
  // POST method
  if (req.method === 'POST') {
    const social = await prisma.socials.create({
      data: {
        name: req.body.name,
        link: req.body.link,
      },
    })
    res.status(201).json(social)
  }
  // POST method

  // GET method
  else if (req.method === 'GET') {
    let response;
    if (req.query.id) {
      response = await prisma.socials.findUnique({
        where: {
          id: Number(req.query.id),
        },
      })
    }
    else {
      response = await prisma.socials.findMany()
    }
    res.status(200).json(response || [])
  }
  // GET method

  // PUT method => overwrites the entire entity if it already exists, and creates a new resource if it doesn’t exist.
  else if (req.method === 'PUT') {
    const social = await prisma.socials.update({
      where: {
        id: Number(req.query.id)
      },
      data: {
        name: req.body.name,
        link: req.body.link,
      },
    })
    res.status(200).json(social)
  }
  // PUT method

  // PATCH method => updates only the fields that are provided in the request body.
  else if (req.method === 'PATCH') {
    const socials = await prisma.socials.update({
      where: { id: Number(req.query.id) },
      data: req.body,
    })
    res.status(200).json(socials)
  }
  // PATCH mehtod

  // DELETE method
  else if (req.method === 'DELETE') {
    await prisma.socials.delete({
      where: {
        id: Number(req.query.id)
      },
    })
    res.status(204).end();
  }
  // DELETE method
}
