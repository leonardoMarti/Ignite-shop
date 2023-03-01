import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { Header } from "@/components/header";
import { Container } from "@/styles/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
