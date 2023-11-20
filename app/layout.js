"use client";
import React, { useEffect, useState } from "react";
// import "./globals2.scss";
import "./globals.scss";
import { Providers } from "./providers";

export default function RootLayout({ children }) {

  return (
    <html lang="en" style={{}}>
      <body>
        <Providers>
          <main className={"container main"}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
