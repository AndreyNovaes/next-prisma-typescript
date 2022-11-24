// icons
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
// types
import { ArrayOfSocials } from 'services/types/baseTypes';
// styles
import { IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import ButtonClickAnimation from '../../../../Animations/ButtonClick';

export default function FooterSocialLinks({ socials }: ArrayOfSocials): JSX.Element {
  const iconBackgroundColor = useColorModeValue('gray.200', 'gray.700')
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
            icon={ name === 'Github' ? <AiFillGithub /> : name === 'Linkedin' ? <AiFillLinkedin /> : <FaWhatsapp /> }
            variant="outline"
            size="lg"
            fontSize="30px"
            _hover={{ bg: iconBackgroundColor }}
          />
        </ButtonClickAnimation>
      ))}
    </>
  )
}
