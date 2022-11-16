import Image from 'next/image'

export default function ImageBox() {
  return (
    <Image
    src='/images/about.jpeg'
    alt='programmer'
    width={300}
    height={300}
    />
  );
}
