import React from 'react'
import { ProductContent } from "./ProductPageContent/ProductContent";
import { Box } from '@chakra-ui/react';

const ProductsSection = () => {
  return (
    <Box  className='section dark' id="products">
      <ProductContent/>
      </Box>
  )
}

export {ProductsSection}