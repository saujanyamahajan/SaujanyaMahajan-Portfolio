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
          My journey began as a Full Stack Developer working in the energy and payments domain, where I built and optimized scalable applications serving over a million customers. I’ve engineered payment processing solutions handling thousands of daily transactions, integrated APIs to streamline business workflows, and developed self-service features that reduced customer support dependency. 
                    </p>
        </div>
      </div>

      {/* Para2 + Button full width below */}
      <div className="mt-10 max-w-3xl mx-auto space-y-5">
        <p className="text-neutral-700 dark:text-neutral-300 text-left">
        With experience in both front-end and back-end development, I focus on delivering reliable, high-performing solutions that directly improve customer experience and business efficiency.          I’m always curious about how people interact with technology, and I find it exciting to create impactful solutions that improve everyday experiences and deliver measurable results.        </p>

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
