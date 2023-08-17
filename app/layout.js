import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";


export default function RootLayout({ children }) {
  // const scrolldata = useScroll({container: ref});
  // console.log(scrolldata)
  return (
    <html lang="en">
      <body>
        <Providers >
          <Header />
          <main className={"container"}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
