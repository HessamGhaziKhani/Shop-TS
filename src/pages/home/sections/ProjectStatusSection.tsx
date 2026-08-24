import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

function ProjectStatusSection() {
  return (
    <section
      dir="ltr"
      className="px-6 py-20 text-gray-900 dark:text-white lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900 sm:p-12">
          <div className="flex flex-col items-center">
            {/* Status */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-400 mb-4 ">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Work in Progress
            </div>

            <h2 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl ">
              The project is still evolving
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              This project is currently under active development. New features,
              improvements and refinements are being added as the application
              evolves.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/HessamGhaziKhani/Shop-TS"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">View on GitHub</Button>
              </a>

              <Link to="/shop">
                <Button variant="secondary">Explore Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectStatusSection;
