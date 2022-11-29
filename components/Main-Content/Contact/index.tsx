import React from 'react';
// helpers
import { useEffect, useState } from 'react';
import { mailValidator } from 'utils/mailValidator';
// styles
import { Box, Button, Flex, Heading, Stack, useColorModeValue, VStack, useToast, useBreakpointValue, Text } from '@chakra-ui/react';
// requests
import { getSocials, sendMail } from 'services/requests';
// icons
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
// components
import FooterSocialLinks from '@/components/Layout/footer/Web/FooterSocialLinks';
import InputForm from '@/components/Main-Content/Contact/components/InputForm';
import IconCopyTool from '@/components/Main-Content/Contact/components/ToolTIp';
import MailPhoneBox from '@/components/Main-Content/Contact/components/MailPhoneBox';
// toast types, what is also a component
import { errorToast, fieldToast, successToast } from 'utils/Toasts';
// types
import { Socials } from 'services/types/baseTypes';

export default function ContactWrapper(): JSX.Element {

  const toast = useToast();
  const [socials, setSocials] = useState<Socials[]>([]);
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    getSocials().then((data) => setSocials(data));
  }, []);

  const actualBreakpoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });
  };

  const handleSubmitOnClick = () => {
  if (forms.name && forms.email && forms.message && mailValidator(forms.email)) {
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
                  <FooterSocialLinks socials={socials} />
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
                  <InputForm 
                    isError={false} 
                    isDisabled={isSubmiting} 
                    value={forms.name} 
                    isRequired={true} 
                    handleOnChange={handleChanges} 
                    label='Name' 
                    name='name' 
                    type='text' 
                    leftIcon={<BsPerson />} />
                  <InputForm 
                    isError={false} 
                    isDisabled={isSubmiting}
                    value={forms.email}
                    isRequired={true}
                    handleOnChange={handleChanges}
                    label='Email'
                    name='email'
                    type='email'
                    leftIcon={<MdOutlineEmail/>} /> 
                  <InputForm 
                    isError={false}
                    isRequired={true}
                    isDisabled={isSubmiting}
                    type='text'
                    value={forms.message}
                    handleOnChange={handleChanges}
                    label='Mensagem'
                    name='message' />
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
