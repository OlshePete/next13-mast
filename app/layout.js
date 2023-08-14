"use client";
import "./globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const colors = {
  brand: {
    900: "#A8D4AF",
    800: "#fff",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Text: {
      variants: {
        nav_link: {
          color: "#FFF",
          cursor: "pointer",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          fontFamily: "Orchidea Pro",
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
      },
    },
    Heading: {
      variants:{
        main_header:{
          color:'brand.800',
          textShadow:'0px 4px 4px rgba(255, 255, 255, 0.05)',
          fontFamily:'Orchidea Pro',
          fontSize:'44px',
          fontStyle:'normal',
          fontWeight:'300',
          lineHeight:'119.5%',
          letterSpacing:'6%',
          textTransform:'uppercase',
          maxWidth:'min(620px, 100%)'
        }
      }
    },
  },
});

export default function RootLayout({ children }) {
  const ref = useRef(null);
  // const scrolldata = useScroll({container: ref});
  // console.log(scrolldata)
  return (
    <html lang="en">
      <body ref={ref}>
        <ChakraProvider theme={theme}>
          <Header />
          <main className={"container"}>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  );
}
