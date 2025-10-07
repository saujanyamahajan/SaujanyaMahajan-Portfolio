import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enxperience",
  description: "Saujanya's Work History",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-medium">Projects</h1>
      <h4 className="mb-8 text-sm text-gray-600 dark:text-gray-400 mb-4">
        Selected work, personal builds, and open‑source contributions.
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="rounded-xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm hover:shadow-md transition overflow-hidden">
          {/* Image */}
          <div className="h-48 w-full overflow-hidden">
            <img
              src="/project1.png"
              alt="Ledger Preview"
              className="w-full object-contain max-h-64"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-lg font-semibold mb-1">Flux</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A budgeting app to track income & expenses with analytics.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
                React
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
                Tailwind
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
                Recharts
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link
                href="https://ledger-puce.vercel.app/"
                target="_blank"
                className="px-3 py-1 rounded-md text-sm bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black"
              >
                Live
              </Link>
              <Link
                href="https://github.com/saujanyamahajan/Ledger"
                target="_blank"
                className="px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Code
              </Link>
            </div>
            
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="rounded-xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm hover:shadow-md transition overflow-hidden">
          {/* Image */}
          <div className="h-48 w-full overflow-hidden">
            <img
              src="/project2.png"
              alt="Portfolio Preview"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-lg font-semibold mb-1">SolVault</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Track blockchain transactions in real-time.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
                React
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
                Typescript
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-neutral-800">
              Wallet Integration
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link
                href="https://solana-transaction-dun.vercel.app/"
                target="_blank"
                className="px-3 py-1 rounded-md text-sm bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black"
              >
                Live
              </Link>
              <Link
                href="https://github.com/saujanyamahajan/solana-transaction"
                target="_blank"
                className="px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
