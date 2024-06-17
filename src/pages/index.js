import { Inter } from "next/font/google";
import InputField from "@presensi/_globals/components/form-input/input-field";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <InputField />
      </main>
    </>
  );
}
