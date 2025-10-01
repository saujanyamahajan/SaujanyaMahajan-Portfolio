import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/ImageAbout.png"
          alt="Profile photo"
          className="rounded bg-gray block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5  hover:grayscale-0"
          unoptimized
          width={260}
          height={260}
          priority
        />
      </a> */}

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-3xl font-bold mb-2"> Hi there! I'm Saujanya</h2>
        <p>
        I’m a .NET Developer with 3+ years of experience designing and building scalable, high-performance applications in the energy and payments domain, serving over a million customers.     I enjoy solving complex problems at the intersection of technology and customer behavior, and I’m passionate about creating products that balance business goals with user needs.
        </p>
      </div>
    </section>
  );
}
