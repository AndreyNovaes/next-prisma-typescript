import Image from 'next/image'

export default function ImageComp(): JSX.Element {
  return (
    <Image
      src='/images/about.jpeg'
      alt="Foto de perfil"
      width={ 300 }
      height={ 300 }
      layout="responsive"
    />
  );
}
