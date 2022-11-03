// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from '@prisma/client'

// const GET = async (req: NextApiRequest, res: NextApiResponse<projects[]>) => {
//   const projects = await prisma.projects.findMany()
//   res.json(projects)
// }

// const POST = async (req: NextApiRequest, res: NextApiResponse<projects>) => {
//   const project = await prisma.projects.create({
//     data: req.body,
//   })
//   res.json(project)
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<projects[] | projects>
) {
  if(req.method === 'GET') {
    const projects = await prisma.projects.findMany()
    res.status(200).json(projects)
  }
  if(req.method === 'POST') {
    const project = await prisma.projects.create({
      data: req.body,
    })
    res.status(201).json(project)
  }
}