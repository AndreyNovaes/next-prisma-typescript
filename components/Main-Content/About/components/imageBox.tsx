import React from 'react';
// helpers
import Image from 'next/image'

export default function ImageBox() {
  return (
    <Image
    src='/images/about.jpeg'
    alt='autor da página'
    width={300}
    height={300}
    />
  );
}
