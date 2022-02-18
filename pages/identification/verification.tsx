import { NextPage } from "next";
import { ReactElement } from "react";
import IdentificationLayout from "../../components/identification-layout";

export default function Verification() {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center gap-8 rounded-md  p-5  backdrop-blur-md  dark:bg-white/5">
      <div className="flex w-full items-center justify-between">
        <h1 className=" select-none text-center font-sans text-2xl font-bold uppercase">Identity</h1>
        <a
          href="/identification/creation"
          className="dark:bg-midnight dark:hover:border-crimson dark:hover:bg-crimson/50 focus-visible:outline-crimson select-none rounded-md p-2 px-4 font-semibold capitalize focus-visible:outline-none dark:hover:text-red-50"
        >
          Create
        </a>
      </div>
      <form className="flex w-full flex-col gap-5 ">
        <div className="flex w-full flex-col gap-2">
          <input
            name="username"
            type="text"
            autoComplete="username"
            required
            placeholder="Username"
            className="dark:bg-midnight focus:border-crimson caret-crimson block w-full rounded-md border-2 border-transparent placeholder:text-slate-500 focus:outline-none focus:ring-0 focus-visible:outline-none"
          />
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="dark:bg-midnight focus:border-crimson caret-crimson block w-full rounded-md border-2 border-transparent placeholder:text-slate-500 focus:outline-none focus:ring-0 focus-visible:outline-none "
          />
        </div>
        <button
          type="submit"
          className="dark:bg-midnight dark:hover:border-crimson dark:hover:bg-crimson/50 focus-visible:outline-crimson w-full select-none rounded-md p-2 px-4 font-semibold capitalize focus-visible:outline-none dark:hover:text-red-50"
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
