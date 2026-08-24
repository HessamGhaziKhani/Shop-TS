function Footer() {
  return (
    <footer
      dir="ltr"
      className="border-t border-gray-200 bg-white px-6 py-8 text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 lg:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            React E-commerce Project
          </p>

          <p className="mt-1 text-sm">
            Built with React, TypeScript and modern frontend tools.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/HessamGhaziKhani/Shop-TS"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://reactshop.arttec.ir"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-gray-200 pt-6 text-center text-xs dark:border-gray-800">
        © {new Date().getFullYear()} React E-commerce Project. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
