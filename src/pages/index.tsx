import { routes } from '@prisma/client';
import React from 'react'
import Hero from '../components/Hero';

type props = {
  routes: routes[];
};

export default function Home({routes}: props): JSX.Element {
  return (
    <>
      <Hero />
    </>
  )
}
