import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import ColorModeSwitcher from './components/Nav/ColorModeSwitcher'
import NavSocialLinks from './components/Nav/NavSocialLinks'


export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home | Andrey Novaes</title>
      </Head>
      <ColorModeSwitcher />
      {/* <NavSocialLinks socials={socials}/> */}
    </Box>
  )
}
