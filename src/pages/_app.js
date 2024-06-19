import { ChakraProvider } from "@chakra-ui/react";
import BaseLayout from "@presensi/app/_globals/layouts/base-layout";
// import { store } from "@presensi/redux/store";
import "@presensi/styles/globals.css";
import theme from "@presensi/styles/theme";
import Head from "next/head";
// import { Provider } from "react-redux";
import { Inter } from "next/font/google";

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
      {/* <Provider store={store}> */}
      <ChakraProvider theme={theme}>
        <BaseLayout>
          <main className={`${inter.className}`}>
            <Component {...pageProps} />
          </main>
        </BaseLayout>
      </ChakraProvider>
      {/* </Provider> */}
    </>
  );
}
