'use client'

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import React from 'react';


const Providers = ({children, ...props}: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  )
}

export default Providers