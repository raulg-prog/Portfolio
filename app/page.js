export default function Home() {
  return (
    <div className="min-h-screen bg-[#757575] text-[#e8ecef] flex flex-col items-center">
      {/* Header */}
      <header className="w-full text-left py-3 px-11">
      <h1 className="text-3xl font-mono tracking-tighter word-spacing-custom">
        raul garcia
      </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center lg:items-start mt-10">

        {/* Image Section */}
        <section className="mt-1 lg:mt-0 lg:ml-20">
          <img
            src="/pumpkin%20head.png"
            alt="pumpkin"
            className="rounded-full w-60 h-60 object-cover shadow-xl img-transform"
          />
        </section>

        {/* Text Section */}
        <section className="mt-14 lg:w-1/2 px-6 lg:px-20">
          <h2 className="text-5xl font-bold text-white">
            <span className="text-[#fc7222]">Hello,</span> I'm Raul
          </h2>
          <p className="mt-6 text-lg">
            I am a student at Cal Poly Pomona, majoring in Computer Engineering.
          </p>
        </section>

      </main>

      {/* Projects Section */}
      <section className="mt-20 w-4/5">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Arriving Soon...</h3>
            <p>will post future projects here</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 mt-10 text-center">
        <a href="https://github.com" className="mx-4">GitHub</a>
        <a href="https://linkedin.com" className="mx-4">LinkedIn</a>
      </footer>
    </div>
  );
}
