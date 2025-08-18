import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "About Me page with profile and details",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">About Me</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
        I believe great products live at the intersection of technology, design, and human needs and that’s where I thrive.
      </p>

      {/* Profile layout (Image + Para1 side by side) */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left column (Image only) */}
        <div className="flex justify-center">
          <Image
            src="/Profile.png"
            alt="My profile photo"
            width={350}
            height={400}
            className="rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right column (Para1) */}
        <div className="space-y-5 text-neutral-700 dark:text-neutral-300">
          <p>
            My path into Product Management began at a US-based service company, where I transitioned
            from Full Stack Developer into Product Engineer. I learned how to bridge the gap between
            business needs and technical execution, collaborate with cross-functional teams, and deliver
            features that improved customer experience and drove measurable business outcomes.
          </p>
        </div>
      </div>

      {/* Para2 + Button full width below */}
      <div className="mt-10 max-w-3xl mx-auto space-y-5">
        <p className="text-neutral-700 dark:text-neutral-300 text-left">
          Drawing on my background in full-stack development, I bring a technical and user-focused
          perspective into my product work. I’m always curious about how people interact with technology,
          and I find it exciting to create functional, impactful solutions that improve everyday
          experiences and deliver real business value.
        </p>
        <div className="flex justify-center">

        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition"
        >
          View Resume
        </Link>
        </div>
      </div>
    </section>

  );
}
