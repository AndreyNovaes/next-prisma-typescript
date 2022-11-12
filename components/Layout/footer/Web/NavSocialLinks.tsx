import { Link, useColorModeValue, IconButton } from "@chakra-ui/react"
import React from "react"
import { socials } from "@prisma/client"
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import ButtonClickAnimation from "../../../../Animations/ButtonClick";

export default function NavSocialLinks({ socials }: { socials: socials[] }): JSX.Element {
  return (
    <>
      {socials && socials.map(({id, link, name}) => (
        <ButtonClickAnimation key={id}>
          <IconButton
            as={Link}
            key={id}
            href={link}
            isExternal
            aria-label={name}
            icon={ name === "Github" ? <AiFillGithub /> : name === "Linkedin" ? <AiFillLinkedin /> : <FaWhatsapp /> }
            variant="outline"
            size="lg"
            fontSize="30px"
            _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
          />
        </ButtonClickAnimation>
      ))}
    </>
  )
}
