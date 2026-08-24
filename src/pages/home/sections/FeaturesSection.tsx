function FeaturesSection() {
  return (
          <section
        dir="ltr"
        className="bg-gray-50 px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-white lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              What I Built
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than just a UI
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This project focuses on building reusable components, managing
              application state and integrating real-world frontend
              functionality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Component Architecture</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Built reusable React components to keep the application modular
                and maintainable.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">State Management</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Managed shopping cart and authentication state using React
                Context API.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">API Integration</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Integrated REST APIs using Axios with separated service and
                endpoint layers.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Authentication</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Implemented sign in, sign up and protected routes for
                authenticated users.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Custom Hooks</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Built reusable custom hooks for local storage and dark mode
                management, keeping application logic separate from UI
                components.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-950 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Responsive Design</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Designed responsive layouts for desktop, tablet and mobile
                devices.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturesSection