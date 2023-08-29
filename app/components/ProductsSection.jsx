import React from 'react'
import { ProductContent } from "./ProductPageContent/ProductContent";
import { Box } from '@chakra-ui/react';
const ProductsSection = () => {
  return (
    <Box pt={4} className='section dark' id="products" overflowX={'hidden'}>
      <ProductContent/>
      </Box>
  )
}

export {ProductsSection}