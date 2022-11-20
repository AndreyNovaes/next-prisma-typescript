import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
  useToast,
  ToastProps,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react';
import NavSocialLinks from '@/components/Layout/footer/Web/NavSocialLinks';
import { socials } from '@prisma/client';
import { getSocials, sendMail } from 'services/requests';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import InputForm from '@/components/Main-Content/Contact/components/InputForm';
import IconCopyTool from '@/components/Main-Content/Contact/components/ToolTIp';
import MailPhoneBox from '@/components/Main-Content/Contact/components/MailPhoneBox';

export type form = {
  name: string;
  email: string;
  message: string;
};

export default function ContactWrapper(): JSX.Element {
  const actualBreakpoint = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  });
  
  const mailValidation = (email: string) => {
    const regex = '^(.+)@(.+)$'
    return email.match(regex)
  }

  const successToast: ToastProps = {
    title: 'Mensagem enviada com sucesso!',
    description: 'Em breve entrarei em contato com você.',
    status: 'success',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };

  const fieldToast: ToastProps = {
    title: 'Preencha todos os campos!',
    description: 'Por favor, preencha todos os campos obrigatórios com dados válidos.',
    status: 'error',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };

  const errorToast: ToastProps = {
    title: 'Erro inesperado',
    description: 'Por favor, tente novamente mais tarde',
    status: 'error',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };

  const toast = useToast();
  const [socials, setSocials] = useState<socials[]>([]);
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    getSocials().then((data) => setSocials(data));
  }, []);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });
  };

  const handleSubmitOnClick = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (forms.name && forms.email && forms.message && mailValidation(forms.email)) {
    setIsSubmiting(true);
    sendMail(forms)
      .then(() => {
        toast(successToast);
          setForms({ name: '', email: '', message: '' });
        })
      .catch(() => toast(errorToast))
      .finally(() => setIsSubmiting(false));
  } else {
    toast(fieldToast);
  }
};


  return (
    <Flex
      align="center"
      justify="center">
      <Box
        rounded="full"
        bg={useColorModeValue('whiteAlpha.900', 'gray.900')}
        borderRadius="lg"
        m={16}
        boxShadow="lg"
        width={{ base: '100%', md: '80%', lg: '55%' }}
        >
      <Box
        borderRadius="lg"
        marginY={10}
        marginX={10}
        >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              as="h1"
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Contato
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
                <VStack spacing={5}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction='row'
                  spacing={10}
                  >
                  <NavSocialLinks socials={socials} />
                </Stack>
                  <MailPhoneBox />
                  {actualBreakpoint === 'base' || actualBreakpoint === 'sm' || actualBreakpoint === 'md' ? (
                    <Text>
                      Os icones abaixo podem ser usados para copiar tanto meu email quanto telefone.
                    </Text>
                    ) : null
                  }
                  <Stack
                    spacing={{ base: 4, md: 8 }}
                    direction='row'
                    align="center"
                    justify="space-around"
                    >
                    <IconCopyTool type='email' value='andreynovaespro@gmail.com' />
                    <IconCopyTool type='telefone' value='+55 21 99431-2856' />
                  </Stack>
                  <Heading fontSize="xl" as={'h2'}>
                    Ou, se preferir, preencha o formulário abaixo e me envie uma mensagem.
                  </Heading>
                  <InputForm isDisabled={isSubmiting} value={forms.name} handleOnChange={handleChanges} isRequired label='Nome' name='name' type='text' placeholder='Nome' leftIcon={<BsPerson />} />
                  <InputForm isDisabled={isSubmiting} value={forms.email} handleOnChange={handleChanges} isRequired label='Email' name='email' type='email' placeholder='Email' leftIcon={<MdOutlineEmail />} />
                  <InputForm isDisabled={isSubmiting} value={forms.message} handleOnChange={handleChanges} isRequired label='Mensagem' name='message' type='text' placeholder='Mensagem' isTextArea />
                  <Button
                    loadingText="Enviando..."
                    isLoading={isSubmiting}
                    onLoad={() => setIsSubmiting(false)}
                    colorScheme="blue"
                    bg="telegram.500"
                    color="white"
                    onClick={handleSubmitOnClick}
                    _hover={{
                      bg: 'telegram.700',
                    }}>
                    Enviar Mensagem
                  </Button>
                </VStack>
            </Stack>
          </VStack>
        </Box>
        </Box>
      </Box>
    </Flex>
  );
}
