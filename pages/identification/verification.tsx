import { NextPage } from "next";
import { ReactElement } from "react";
import IdentificationLayout from "../../components/identification-layout";

export default function Verification() {
  return (
    <div className="inset-0 mx-auto flex max-w-sm flex-col items-center justify-center space-y-5 rounded-lg p-5 backdrop-blur-md dark:bg-white/5 dark:text-slate-500">
      <h1 className="font-sans text-xl font-semibold">Identity Verification</h1>
      <form className="space-y-3">
        <input
          name="username"
          type="text"
          autoComplete="username"
          required
          placeholder="Username"
          className="block w-full rounded-md border-transparent bg-midnight focus:border-slate-900 focus:ring-0"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Password"
          className="block w-full rounded-md border-transparent bg-midnight focus:border-slate-900 focus:ring-0"
        />
        <button type="submit" className="w-full rounded-md p-2 dark:bg-red-900/10  dark:hover:bg-midnight">
          Verify
        </button>
      </form>
    </div>
  );
}

Verification.getLayout = function (page: ReactElement) {
  return <IdentificationLayout>{page}</IdentificationLayout>;
};
