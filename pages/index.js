import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App with Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex flex-col justify-center items-center">
        <h1 className="m-0 text-6xl font-medium text-center">
          Welcome to <a href="https://nextjs.org" className="hover:text-blue-600">Next.js</a> with <a href="https://tailwindcss.com" className="hover:text-blue-600">TailwindCSS!</a>
        </h1>

        <p className="text-center text-2xl py-4">
          Get started by editing{' '}
          <code className="bg-gray-50 rounded-sm p-3 font-mono text-lg">pages/index.js</code>
        </p>

        <div className="max-w-4xl py-20 grid grid-cols-2 grid-flow-row gap-2">
          <a href="https://nextjs.org/docs" className="m-4 p-6 text-left border border-gray-400 rounded-md hover:border-blue-600 hover:text-blue-600">
            <h3 className="font-semibold text-2xl">Next.js Documentation &rarr;</h3>
            <p className="pt-2">Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://tailwindcss.com/docs/" className="m-4 p-6 text-left border border-gray-400 rounded-md hover:border-blue-600 hover:text-blue-600">
            <h3 className="font-semibold text-2xl">TailwindCSS Documentation &rarr;</h3>
            <p className="pt-2">Learn how to get Tailwind set up in your project.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 p-6 text-left border border-gray-400 rounded-md hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="font-semibold text-2xl">Examples &rarr;</h3>
            <p className="pt-2">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left border border-gray-400 rounded-md hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="font-semibold text-2xl">Deploy &rarr;</h3>
            <p className="pt-2">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-20 border-t border-gray-400 flex flex-col justify-center items-center">
          Powered by
          <div className="grid grid-cols-2 grid-flow-row pt-4">
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/vercel.svg" alt="Vercel Logo" className="h-4" />
              </a>
              <a
                href="https://tailwindcss.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/tailwind.svg" alt="TailwindCSS Logo" className="h-4" />
              </a>
          </div>
      </footer>
    </div>
  )
}
