import React from 'react'
import { ProductContent } from "./ProductPageContent/ProductContent";
import { Box } from '@chakra-ui/react';
const ProductsSection = () => {
  return (
    <Box pt={['120px']} className='section dark' id="products">
      <ProductContent/>
      </Box>
  )
}

export {ProductsSection}