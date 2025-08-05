import Image from "next/image";
import { Counter } from "@/components/counter";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start max-w-3xl w-full bg-teal-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-teal-700">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Counter />

        <ol className="list-decimal list-inside text-sm text-teal-100 space-y-2">
          <li>
            Integrate authentication using{" "}
            <a
              href="https://clerk.dev"
              className="text-green-300 underline hover:text-green-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clerk.dev
            </a>{" "}
            for seamless sign-in, sign-up, and user management.
          </li>
          <li>
            Use{" "}
            <code className="bg-teal-800/80 px-2 py-1 rounded text-green-300 font-mono">
              &lt;SignedIn&gt;
            </code>{" "}
            and{" "}
            <code className="bg-teal-800/80 px-2 py-1 rounded text-green-300 font-mono">
              &lt;SignedOut&gt;
            </code>{" "}
            components to conditionally render UI based on auth status.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <a
            className="rounded-full bg-green-500 text-teal-900 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center gap-2 hover:bg-green-400 transition"
            href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.netlify.com/v3/img/components/logomark.png"
              alt="Netlify logo"
              width={20}
              height={20}
            />
            Deploy to Netlify
          </a>
          <a
            className="rounded-full border border-green-300 text-green-300 hover:bg-green-600 hover:text-white transition font-medium text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center w-full sm:w-auto"
            href="https://clerk.com/docs/quickstarts/nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clerk Auth Guide
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-teal-100">
        <a
          className="flex items-center gap-2 hover:underline hover:text-green-200 transition"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:text-green-200 transition"
          href="https://github.com/netlify-templates/next-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Netlify Starter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:text-green-200 transition"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
