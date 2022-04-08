import Document, { Head, Html, Main, NextScript } from "next/document";

export default class DawnDocumnet extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-midnight dark:text-slate-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
