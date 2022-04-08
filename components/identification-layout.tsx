import DawnFooter from "./footer";

const IdentificationLayout = ({ children }: any) => {
  return (
    <div className="dark:bg-midnight flex min-h-screen flex-col items-center justify-center subpixel-antialiased">
      <main className="flex grow items-center justify-center">{children}</main>
      <DawnFooter />
    </div>
  );
};

export default IdentificationLayout;
