import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { getRoutes, getSocials } from "../services/requests"
import { routes, socials } from '@prisma/client'
import Nav from './components/Nav'

export async function getStaticProps() {
  const routes = await getRoutes()
  return {
    props: {
      routes
    },
  }
}

type HomeProps = {
  routes: routes[]
}

export default function Home({ routes }: HomeProps): JSX.Element {
  return (
    <Box>
      <Head>
        <title>teste nextjs</title>
        <meta name="description" content="portfolio de Andrey Novaes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav routes={routes} />
    </Box>
  )
}
