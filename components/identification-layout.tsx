const IdentificationLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-midnight subpixel-antialiased">
      <main className="grow flex items-center justify-center">{children}</main>
      <footer className="w-screen flex items-center justify-center shrink font-sans text-xs dark:text-slate-500 dark:bg-white/5">
        Made by Scholar Devil God
      </footer>
    </div>
  );
};

export default IdentificationLayout;
