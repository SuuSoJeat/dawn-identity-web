import { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import IdentificationLayout from "../../components/identification-layout";
import Input from "../../components/input";

export default function Verification() {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center gap-8 rounded-md  p-5  backdrop-blur-md  dark:bg-white/5">
      <div className="flex w-full items-center justify-between">
        <h1 className=" select-none text-center font-sans text-2xl font-bold uppercase">Identity</h1>
        <Link href="/identification/creation">
          <a className="select-none rounded-md p-2 px-4 font-semibold capitalize focus-visible:outline-none focus-visible:outline-crimson dark:bg-midnight dark:hover:border-crimson dark:hover:bg-crimson/50 dark:hover:text-red-50">
            Create
          </a>
        </Link>
      </div>
      <form className="flex w-full flex-col gap-5 ">
        <div className="flex w-full flex-col gap-2">
          <Input name="username" placeholder="Username" type="text" />
          <Input name="password" placeholder="Password" type="password" />
        </div>
        <button
          type="submit"
          className="w-full select-none rounded-md p-2 px-4 font-semibold capitalize focus-visible:outline-none focus-visible:outline-crimson dark:bg-midnight dark:hover:border-crimson dark:hover:bg-crimson/50 dark:hover:text-red-50"
        >
          Verify
        </button>
      </form>
    </div>
  );
}

Verification.getLayout = function (page: ReactElement) {
  return <IdentificationLayout>{page}</IdentificationLayout>;
};
