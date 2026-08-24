function TechStackSection() {
  return (
          <section
        dir="ltr"
        className="bg-white px-6 py-20 text-gray-900 dark:bg-gray-950 dark:text-white lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Tech Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies behind the project
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Tools and technologies used to build the application.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "React Router",
              "React Query",
              "Axios",
              "Context API",
              "REST API",
              "Git / GitHub",
            ].map((technology) => (
              <div
                key={technology}
                className="flex min-h-24 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 text-center text-sm font-semibold transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TechStackSection