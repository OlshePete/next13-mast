import React from 'react';
import { HeaderContent } from './HeaderContent/HeaderContent';
export default function Header({scrollY}) {
  return (
    <header>
      <HeaderContent scrollY={scrollY}/>
    </header>
  );
}
