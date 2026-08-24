function TechnicalHighlightsSection() {
  return (
          <section
        dir="ltr"
        className="bg-white px-6 py-20 text-gray-900 dark:bg-gray-950 dark:text-white lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Technical Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How the application is built
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Key technical decisions and patterns used throughout the
              application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                01
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                Type-safe Development
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                TypeScript is used across components, contexts, hooks and
                application logic to provide a more reliable development
                experience.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                02
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                Reusable Custom Hooks
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Custom hooks are used to extract reusable application logic such
                as local storage and dark mode management.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                03
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                Global State Management
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                React Context API is used to manage shared application state
                such as shopping cart data.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                04
              </span>

              <h3 className="mt-3 text-xl font-semibold">Persistent State</h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                LocalStorage is used to persist important user preferences and
                application data between sessions.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                05
              </span>

              <h3 className="mt-3 text-xl font-semibold">API Integration</h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Axios is used to communicate with REST APIs while keeping
                data-fetching logic separated from UI components.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                06
              </span>

              <h3 className="mt-3 text-xl font-semibold">Theme Management</h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                A custom dark mode hook manages the application theme and keeps
                the user's preference persistent.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TechnicalHighlightsSection