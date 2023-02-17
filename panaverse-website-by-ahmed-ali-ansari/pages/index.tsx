import Head from "next/head";
import Landingpage from "@/components/Landingpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.png" />
      </Head>
      <div>
       
        <Landingpage />
        
      </div>
    </>
  );
}
