import Image from "next/image";
import ManoelLopesAvatar from "../../images/manoel_lopes.jpg";

function About() {
  return (
    <section className="mt-10 flex flex-col items-center justify-between gap-6 md:gap-2 lg:flex-row">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="font-ocra text-2xl text-green-700">
          <span className="text-zinc-300">{"<"}</span>About Manoel
          <span className="text-zinc-300">{" />"}</span>
        </h1>

        <p className="max-w-[700px] text-justify indent-10 leading-7 tracking-wide lg:ml-10">
          I&apos;m a Full Stack Software Engineer, with proficiency in backend
          technologies like Node.js and Python, as well as frontend tools like
          React.js, Astro, and Next.js. I excel in CSS3 styling and utilize
          modern frameworks like Tailwind CSS. My database expertise includes
          PostgreSQL, MongoDB, and MariaDB, with proficiency in ORMs like Prisma
          and SQLAlchemy. I&apos;ve worked with frameworks like FastAPI and
          Express. My Agile Methodologies background complements my strong QA
          skills, covering manual and automated testing with Selenium, Cypress,
          and Playwright. On a personal note, I&apos;m an Inline Hockey
          enthusiast 🏒 and a devoted fan of Harry Potter ⚡ and Lord of the
          Rings 🌄.
        </p>
      </div>
      <div className="mt-2 flex h-80 w-80 flex-col items-center justify-center rounded-full shadow-xl shadow-cyan-500/50">
        <Image
          src={ManoelLopesAvatar}
          alt="Manoel Lopes, Preparing his hockey stick for a game!"
          className={"h-80 w-80 rounded-full object-cover ring-4 ring-cyan-500"}
        />
      </div>
    </section>
  );
}

export default About;
