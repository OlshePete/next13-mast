'use client'
import { Text } from "@chakra-ui/react"

function BrandText({variant='post_text', children,...rest}) {
  return (
    <Text variant={variant} textAlign={'left'} {...rest}>{children}</Text>
  )
}

export default BrandText