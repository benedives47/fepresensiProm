import { ChakraProvider } from "@chakra-ui/react";
import BaseLayout from "@presensi/app/_globals/layouts/base-layout";
import "@presensi/styles/globals.css";
import theme from "@presensi/styles/theme";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@presensi/app/redux/store";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prompt 2 With Love</title>
        <meta
          name="description"
          content="SMAN 2 Bandung Prompt 2024, Presention App"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <main className={`${inter.className}`}>
            {Component.getLayout ? (
              <Component {...pageProps} />
            ) : (
              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>
            )}
          </main>
        </Provider>
      </ChakraProvider>
    </>
  );
}
