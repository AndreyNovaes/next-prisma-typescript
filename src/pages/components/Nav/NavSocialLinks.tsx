import { Box, Flex, Link, useColorModeValue, IconButton } from "@chakra-ui/react"
import React from "react"
import { getSocials } from "../../../services/requests"
import { socials } from "@prisma/client"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export async function getStaticProps() {
  const socials = await getSocials()

  return {
    props: {
      socials,
    }
  }
}

export default function NavSocialLinks({ socials }: { socials: socials[] }): JSX.Element {
  return (
    <Flex>
      <Box>
        {socials && socials.map((social) => (
          <Link key={social.id} href={social.link} isExternal>
            <IconButton
              aria-label={social.name}
              icon={ social.name === "Github" ? <AiFillGithub /> : social.name === "Linkedin" ? <AiFillLinkedin /> : <AiOutlineMail />}
              variant="outline"
              size="lg"
              mr="2"
              ml="2"
              padding="2"
              fontSize="3xl"
              _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
            />
          </Link>
        ))}
      </Box>
    </Flex>
  )
}
