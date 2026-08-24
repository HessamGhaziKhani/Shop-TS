import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

function HeroSection() {
  return (
    <section
      dir="ltr"
      className="flex min-h-[80vh] items-center justify-center bg-white px-6 text-center text-gray-900 dark:bg-gray-950 dark:text-white lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Modern E-commerce Application
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          React E-commerce Project
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-400">
          A responsive e-commerce application built with React, TypeScript and
          modern frontend technologies.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/shop">
            <Button variant="primary">Explore Project</Button>
          </Link>

          <a href="https://github.com/HessamGhaziKhani/Shop-TS" target="_blank" rel="noreferrer">
            <Button variant="secondary">View on GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
