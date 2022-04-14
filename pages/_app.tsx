import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>People of Star Wars</title>
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
