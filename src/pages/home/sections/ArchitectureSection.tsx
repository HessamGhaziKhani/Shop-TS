function ArchitectureSection() {
  return (
          <section
        dir="ltr"
        className="bg-gray-50 px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-white lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Project Structure
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A modular structure that separates UI components, application
              logic, routing and API-related functionality.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Folder Tree */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
              {/* Explorer Header */}
              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  src
                </span>
              </div>

              {/* Tree */}
              <div className="p-5">
                <div className="space-y-1 font-mono text-sm">
                  {/* components */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">components</span>
                  </div>

                  {/* context */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">context</span>
                  </div>

                  {/* hooks */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">hooks</span>
                  </div>

                  {/* layouts */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">layouts</span>
                  </div>

                  {/* pages */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">pages</span>
                  </div>

                  {/* routes */}
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">routes</span>
                  </div>

                  {/* services */}
                  <div className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950/30">
                    <span className="text-lg">📁</span>
                    <span className="font-medium text-blue-700 dark:text-blue-300">
                      services
                    </span>
                  </div>

                  {/* product */}
                  <div className="ml-7 border-l border-gray-200 pl-4 dark:border-gray-800">
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                      <span>📁</span>
                      <span>product</span>
                    </div>

                    <div className="ml-7 border-l border-gray-200 pl-4 dark:border-gray-800">
                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>endpoints.ts</span>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>hooks.ts</span>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>types.ts</span>
                      </div>
                    </div>
                  </div>

                  {/* users */}
                  <div className="ml-7 border-l border-gray-200 pl-4 dark:border-gray-800">
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                      <span>📁</span>
                      <span>users</span>
                    </div>

                    <div className="ml-7 border-l border-gray-200 pl-4 dark:border-gray-800">
                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>endpoints.ts</span>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>hooks.ts</span>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600 dark:text-gray-400">
                        <span>📄</span>
                        <span>types.ts</span>
                      </div>
                    </div>
                  </div>

                  {/* types */}
                  <div className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-900">
                    <span className="text-lg">📁</span>
                    <span className="font-medium">types</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Explanation */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-semibold">Separation of Concerns</h3>

              <div className="mt-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm dark:bg-blue-950/50">
                      UI
                    </span>

                    <h4 className="font-medium">Components</h4>
                  </div>

                  <p className="mt-2 pl-11 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Reusable UI components such as buttons, product cards,
                    headers, loaders and skeletons.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-sm dark:bg-purple-950/50">
                      ST
                    </span>

                    <h4 className="font-medium">Context & Hooks</h4>
                  </div>

                  <p className="mt-2 pl-11 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Client-side state and reusable application logic are
                    separated from the presentation layer.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm dark:bg-green-950/50">
                      API
                    </span>

                    <h4 className="font-medium">Services</h4>
                  </div>

                  <p className="mt-2 pl-11 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    API functionality is organized by domain, keeping product
                    and user operations separated.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-sm dark:bg-yellow-950/50">
                      TS
                    </span>

                    <h4 className="font-medium">Types</h4>
                  </div>

                  <p className="mt-2 pl-11 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    TypeScript types are organized and shared across different
                    parts of the application.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-sm dark:bg-red-950/50">
                      RQ
                    </span>

                    <h4 className="font-medium">React Query</h4>
                  </div>

                  <p className="mt-2 pl-11 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Server state and API data fetching are handled through React
                    Query hooks inside each service domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ArchitectureSection