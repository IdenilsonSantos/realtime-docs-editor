import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { ptBR } from '@clerk/localizations'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Live Docs",
  description: "A collaboration service"
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ClerkProvider
    localization={ptBR}
    appearance={{
      baseTheme: dark,
      variables: { 
        colorPrimary: "#3371FF",
        fontSize: '16px'
      },
    }}
    >
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
