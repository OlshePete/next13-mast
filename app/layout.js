import "./globals.css";
import { Providers } from "./providers";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers >
          <main className={"container"}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
