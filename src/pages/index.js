import Head from "next/head";
import { Inter } from "next/font/google";
import InputField from "@presensi/_globals/components/form-input/input-field";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <main className={`${inter.className}`}>
        <InputField />
      </main>
    </>
  );
}
