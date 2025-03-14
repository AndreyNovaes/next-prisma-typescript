import React, { useState } from 'react';
// helpers
import { mailValidator } from 'utils/mailValidator';
// styles
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Stack, 
  useColorModeValue, 
  VStack, 
  useToast, 
  useBreakpointValue, 
  Text, 
  Container 
} from '@chakra-ui/react';
// services
import { sendMail } from 'services/requests';
// icons
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
// components
import FooterSocialLinks from '@/components/Layout/footer/Web/FooterSocialLinks';
import InputForm from '@/components/Main-Content/Contact/components/InputForm';
import IconCopyTool from '@/components/Main-Content/Contact/components/ToolTIp';
import MailPhoneBox from '@/components/Main-Content/Contact/components/MailPhoneBox';
// toast types
import { errorToast, fieldToast, successToast } from 'utils/Toasts';
// static data
import { socials } from '../../../data/staticData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactWrapper(): JSX.Element {
  const toast = useToast();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [forms, setForms] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const actualBreakpoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' });
  
  // const bgColor = useColorModeValue('#3182CE', '#3182CE'); // azul fixo para testes
  // const textColor = useColorModeValue('white', 'white');

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
        rounded="md"
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
        m={{ base: 4, md: 16 }}
        p={{ base: 4, md: 8 }}
        boxShadow="lg"
        width={{ base: '100%', md: '80%', lg: '55%' }}
      >
        <VStack spacing={{ base: 4, md: 8, lg: 10 }} width="full">
          <Heading
            as="h1"
            fontSize={{
              base: '4xl',
              md: '5xl',
            }}>
            Contato
          </Heading>

          <VStack spacing={8} width="full">
            <Stack
              align="center"
              justify="space-around"
              direction='row'
              spacing={10}>
              <FooterSocialLinks socials={socials} />
            </Stack>
            
            <MailPhoneBox />
            
            {actualBreakpoint === 'base' || actualBreakpoint === 'sm' || actualBreakpoint === 'md' ? (
              <Text>
                Os icones abaixo podem ser usados para copiar tanto meu email quanto telefone.
              </Text>
            ) : null}
            
            <Stack
              spacing={{ base: 4, md: 8 }}
              direction='row'
              align="center"
              justify="space-around">
              <IconCopyTool type='email' value='andreynovaespro@gmail.com' />
              <IconCopyTool type='telefone' value='+55 21 99431-2856' />
            </Stack>
            
            <Heading fontSize="xl" as={'h2'} mt={4}>
              Ou, se preferir, preencha o formulário abaixo e me envie uma mensagem.
            </Heading>
            
            <Container p={0} width="full">
              <VStack spacing={4} width="full">
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
              </VStack>
            </Container>
            
            <Box width="full" mt={6} px={0}>
              <Button
                loadingText="Enviando..."
                isLoading={isSubmiting}
                onLoad={() => setIsSubmiting(false)}
                colorScheme="blue"
                color="white"
                backgroundColor="#3B82F6"
                width="100%"
                height="45px"
                size="md"
                fontWeight="normal"
                borderRadius="md"
                boxShadow="sm"
                _hover={{
                  backgroundColor: '#2563EB',
                  boxShadow: 'md'
                }}
                _active={{
                  backgroundColor: '#1D4ED8',
                }}
                onClick={handleSubmitOnClick}>
                Enviar Mensagem
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
}
