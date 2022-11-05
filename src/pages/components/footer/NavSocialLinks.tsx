import { Box, Flex, Link, useColorModeValue, IconButton } from "@chakra-ui/react"
import React from "react"
import { socials } from "@prisma/client"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function NavSocialLinks({ socials }: { socials: socials[] }): JSX.Element {
  return (
    <Flex>
      <Box>
        {socials && socials.map(({id, link, name}) => (
          <Link key={id} href={link} isExternal>
            <IconButton
              aria-label={name}
              icon={ name === "Github" ? <AiFillGithub /> : name === "Linkedin" ? <AiFillLinkedin /> : name === "Whatsapp" ? <FaWhatsapp /> : <AiOutlineMail /> }
              variant="outline"
              size="lg"
              mx={2}
              padding="2"
              fontSize="30px"
              _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
            />
          </Link>
        ))}
      </Box>
    </Flex>
  )
}
