export default function WelcomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white px-4 py-10">
      <div className="text-center p-10 bg-teal-900/80 rounded-2xl shadow-2xl max-w-4xl w-full space-y-10 border border-teal-700">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-extrabold text-green-300 mb-4">
            Welcome to Our Next.js App with Clerk Authentication
          </h1>
          <p className="text-lg text-teal-100">
            Seamlessly integrate secure authentication into your Next.js application with Clerk.
          </p>
        </div>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-200 mb-2">🔐 Easy Authentication</h2>
            <p className="text-sm text-teal-100">Integrate sign-in, sign-up, and user management effortlessly using Clerk pre-built UI components.</p>
          </div>
          <div className="bg-emerald-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-200 mb-2">🔒 Secure and Reliable</h2>
            <p className="text-sm text-teal-100">Clerk provides end-to-end encryption to keep your users data safe while maintaining high availability.</p>
          </div>
          <div className="bg-emerald-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-200 mb-2">⚡ Seamless Integration</h2>
            <p className="text-sm text-teal-100">Integrate Clerk with minimal effort to authenticate users, and let Clerk handle the complexity of managing user sessions and tokens.</p>
          </div>
        </section>

        {/* About */}
        <section className="text-left space-y-2 text-teal-100">
          <h3 className="text-2xl font-semibold text-green-300">About Clerk</h3>
          <p>
            Clerk is an easy-to-use authentication platform that provides all the tools to handle user sign-ups, logins, and session management, right out of the box. With Clerk, you can focus on building your app while Clerk handles the authentication layer.
          </p>
        </section>

        {/* Mission */}
        <section className="text-left space-y-2 text-teal-100">
          <h3 className="text-2xl font-semibold text-green-300">Our Mission with Clerk</h3>
          <p>
            To make user authentication as easy and seamless as possible for developers, so they can focus on building amazing apps without worrying about security, compliance, or session management.
          </p>
        </section>

        {/* Testimonials */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-green-300">What Our Users Say</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-700 p-4 rounded-lg border border-emerald-600">
              <p className="text-sm text-teal-100">Clerk has made integrating authentication into my Next.js app a breeze. The UI components are beautiful and easy to implement!</p>
              <span className="block mt-2 text-sm font-medium text-green-200">— Jordan M., Full-stack Developer</span>
            </div>
            <div className="bg-emerald-700 p-4 rounded-lg border border-emerald-600">
              <p className="text-sm text-teal-100">The simplicity and ease of using Clerk for user authentication is unmatched. I love how everything works together seamlessly.</p>
              <span className="block mt-2 text-sm font-medium text-green-200">— Emily T., Software Engineer</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <a
          href="https://clerk.dev/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block"
        >
          <button className="px-8 py-3 bg-green-500 text-teal-900 font-semibold rounded-full hover:bg-green-400 hover:text-orange-700 transition duration-300">
            Check out the Clerk Docs
          </button>
        </a>


      </div>
    </main>
  );
}
