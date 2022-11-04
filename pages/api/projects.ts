// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<projects[] | projects>
) {
// POST method
  if(req.method === 'POST') {
    const projectCreated = await prisma.projects.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        image: req.body.image,
        github: req.body.github,
        deploy: req.body.deploy,
      },
    })
    res.status(201).json(projectCreated)
  }
// POST method

// GET method
  else if(req.method === 'GET') {
    let project;
    if(req.query.id) {
      project = await prisma.projects.findUnique({
        where: {
          id: Number(req.query.id),
        },
      })
    }
    else {
      project = await prisma.projects.findMany()
    }
    res.status(200).json(project || [])
  }
// GET method

// PUT method => overwrites the entire entity if it already exists, and creates a new resource if it doesn’t exist.
  else if(req.method === 'PUT') {
    const newProjectOvewrite = await prisma.projects.update({
      where: {
        id: Number(req.query.id)
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        image: req.body.image,
        github: req.body.github,
        deploy: req.body.deploy,
      },
    })
    res.status(200).json(newProjectOvewrite)
  }
// PUT method

// PATCH method updates only the fields that are provided in the request body.
  else if(req.method === 'PATCH') {
    const projectModified = await prisma.projects.update({
      where: { id: Number(req.query.id) },
      data: req.body,
    })
    res.status(200).json(projectModified)
  }
// PATCH method

// DELETE method
  else if(req.method === 'DELETE') {
    await prisma.projects.delete({
      where: {
        id: Number(req.query.id)
      },
    })
    res.status(204).end()
  }
// DELETE method
}
