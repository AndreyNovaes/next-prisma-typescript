import { prisma } from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from "next";
import { routes } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<routes[] | routes>
) {
  // POST method
  if (req.method === 'POST') {
    const routeCreated = await prisma.routes.create({
      data: {
        name: req.body.name,
        path: req.body.path,
      },
    })
    res.status(201).json(routeCreated)
  }
  // POST method

  // GET method
  else if (req.method === 'GET') {
    let route;
    if (req.query.id) {
      route = await prisma.routes.findUnique({
        where: {
          id: Number(req.query.id),
        },
      })
    }
    else {
      route = await prisma.routes.findMany()
    }
    res.status(200).json(route || [])
  }
  // GET method

  // PUT method => overwrites the entire entity if it already exists, and creates a new resource if it doesn’t exist.
  else if (req.method === 'PUT') {
    const routeOverwrite = await prisma.routes.update({
      where: {
        id: Number(req.query.id)
      },
      data: {
        name: req.body.name,
        path: req.body.path,
      },
    })
    res.status(200).json(routeOverwrite)
  }
  // PUT method

  // PATCH method => updates only the fields that are provided in the request body.
  else if (req.method === 'PATCH') {
    const routeModified = await prisma.routes.update({
      where: { id: Number(req.query.id) },
      data: req.body,
    })
    res.status(200).json(routeModified)
  }
  // PATCH mehtod

  // DELETE method
  else if (req.method === 'DELETE') {
    await prisma.routes.delete({
      where: {
        id: Number(req.query.id)
      },
    })
    res.status(204).end();
  }
  // DELETE method
}
