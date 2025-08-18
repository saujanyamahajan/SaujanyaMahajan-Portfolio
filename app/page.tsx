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
        Aspiring Product Manager with a background in full-stack development. I’m curious about how technology shapes customer behavior and passionate about building products that balance business goals and user needs.
        </p>
      </div>
    </section>
  );
}
