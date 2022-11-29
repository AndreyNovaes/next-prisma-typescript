import { ToastProps } from '@chakra-ui/react';
// ToastProps, used in contact page
// './components/Main-Content/Contact/index.tsx'

export const successToast: ToastProps = {
    title: 'Mensagem enviada com sucesso!',
    description: 'Em breve entrarei em contato com você.',
    status: 'success',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };

export const fieldToast: ToastProps = {
    title: 'Preencha todos os campos!',
    description: 'Por favor, preencha todos os campos obrigatórios com dados válidos.',
    status: 'error',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };

export const errorToast: ToastProps = {
    title: 'Erro inesperado',
    description: 'Por favor, tente novamente mais tarde',
    status: 'error',
    duration: 5000,
    position: 'top',
    isClosable: true,
  };
