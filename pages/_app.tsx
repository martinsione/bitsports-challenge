import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
