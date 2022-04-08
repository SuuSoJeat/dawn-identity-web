import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DawnFooter from "../components/footer";
import Input from "../components/input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Identity</title>
        <meta name="description" content="Dawn Identity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full grow flex-col items-center justify-around gap-8 ">
        <h1 className="text-3xl font-bold uppercase md:text-5xl">Identity</h1>
        <form className="w-8/12 md:w-4/12">
          <Input
            id="identityQuery"
            name="identityQuery"
            placeholder="Search..."
            type="text"
            className="border-crimson border-opacity-25 dark:bg-black/95 dark:backdrop-blur-md"
            autoComplete="off"
            autoFocus
            onChange={(event) => {
              console.log("onChange", event.target.value);
            }}
          />
        </form>
        <div>
          <div className=" border-crimson flex flex-col rounded-md border-opacity-25 bg-white/5 backdrop-blur-md md:flex-row md:gap-3 md:p-5">
            <div>
              <Image
                alt="Profile Photo"
                src="https://via.placeholder.com/150x200"
                width="150"
                height="200"
                className="rounded-md brightness-50"
              />
            </div>
            <div className="p-3 font-semibold">
              <h2>Tony Stark</h2>
            </div>
          </div>
        </div>
      </main>
      <DawnFooter />
    </div>
  );
};

export default Home;
