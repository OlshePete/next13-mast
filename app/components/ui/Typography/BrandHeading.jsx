'use client'
import { Heading } from "@chakra-ui/react"

function BrandHeading({variant='main_header', children,...rest}) {
  return (
    <Heading variant={variant} textAlign={'left'} {...rest}>{children}</Heading>
  )
}

export default BrandHeading