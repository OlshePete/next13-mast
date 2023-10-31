'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import localFont from '@next/font/local'
const colors = {
  brand: {
    900: "#A8D4AF",
    800: "#fff",
    700: "#22356f",
  },
};
export const orchidea_pro = localFont({
  src: [
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-ExtraLight.otf',
      weight: '200'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-Light.otf',
      weight: '300'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-Medium.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-SemiBold.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-Bold.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-ExtraBold.otf',
      weight: '800'
    },
    {
      path: '../public/fonts/OrchideaPro/OrchideaPro-Black.otf',
      weight: '900'
    }
  ],
  variable: '--font-orchidea-pro'
})
export const theme = extendTheme({
  colors,
  fonts: {
    heading: orchidea_pro.style.fontFamily,
    text:`'Spectral'`,
    body: `'Spectral'`,
  },
  styles:{
    global:{
      header: {
        padding:['8px','16px','0 50px']
      },
      '.section':{
        padding:['8px','16px','0 50px']
      },
    }
  },
  components: {
    Text: {
      variants: {
        nav_link: {
          color: "#FFF",
          cursor: "pointer",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily: orchidea_pro.style.fontFamily,
          fontSize: "44px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          transition: "all 0.2s ease-in-out",
          _hover: {
            color: "brand.900",
          },
        },
        products_link: {
            color: "brand.800",
          cursor: "pointer",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily: "Orchidea Pro",
          position:'relative',
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          transition: "all 0.2s ease-in-out",
          _hover: {
            color: "brand.900",
          },
        },
        paragraph: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
        },
        post_text: {
          color: "lightgrey",
          fontStyle: "normal",
          lineHeight: "119.5%",
          fontSize: '22px',
          fontWeight: 300,
          lineHeight: '30px',
          letterSpacing: '0em',

        },
        link_text: {
          fontSize: '18px',
          fontWeight: 300,
          lineHeight: '24px',
          letterSpacing: '0em',
          color: '#A8D4AF33',
        },
      },
    },
    Heading: {
      variants:{
        main_header:{
          color:'brand.800',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          // fontFamily:'Orchidea Pro',
          fontSize:['32px','36px','44px'],
          fontStyle:'normal',
          fontFamily:orchidea_pro.style.fontFamily,
          fontWeight:'300',
          lineHeight:'119.5%',
          letterSpacing:'2.64px',
          textTransform:'uppercase',
          maxWidth:'min(620px, 100%)'
        },
        section_header: {
          color:'brand.800',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          fontSize:['32px','44px','64px'],
          fontStyle:'normal',
          fontFamily:orchidea_pro.style.fontFamily,
          fontWeight:'700',
          lineHeight:'119.5%',
          letterSpacing:'3.84px',
          textTransform:'uppercase',
          maxWidth:'100%'
        },
        sub_header:{
          color:'brand.800',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(2px)',
          // fontFamily:'Orchidea Pro',
          fontSize:['34px'],
          fontStyle:'normal',
          fontWeight:'200',
          lineHeight:'119.5%',
          letterSpacing:'2.64px',
          textTransform:'uppercase',
          maxWidth:'min(720px, 100%)'
        },
        post_header:{
          color:'brand.800',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          textAlign:'right',
          // fontFamily:'Orchidea Pro',
          fontSize:['28px'],
          fontStyle:'normal',
          fontWeight:'200',
          lineHeight:'33.46px',
          letterSpacing:'6%',
          textTransform:'uppercase',
          maxWidth:'min(720px, 100%)'
        },

      }
    },
    Button:{
      variants:{
        products_link_more:{
          color:'brand.900',
          border:'1px solid #A8D4AF',
          padding:'25px',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          // fontFamily:'Orchidea Pro',
          fontSize:['24px'],
          fontStyle:'normal',
          fontWeight:'400',
          lineHeight:'100%',
          textTransform:'uppercase',
          maxWidth:'min(320px, 100%)'
        }
      }
    },
    ListItem: {
      variants: {
        regular: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
        }
      }
    }
  },
});
export function Providers({ 
    children 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}