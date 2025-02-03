import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { FaReact } from "react-icons/fa";
import Link from "next/link";
import projects from "../../projects_data/Projects";

function Projects() {
  return (
    <>
      <section className="mt-10 flex flex-col items-center justify-evenly gap-6 md:items-start md:gap-2">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-ocra text-2xl text-yellow-400">
            <span className="text-zinc-300">{"<"}</span>Projects
            <span className="text-zinc-300">{" />"}</span>
          </h1>
        </div>

        <div className="md:grid-row-2 mt-2 grid w-full gap-3 lg:grid-flow-col">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                className="flex min-w-[33%] flex-col items-center rounded-md border-2 border-cyan-400 px-4 py-2"
              >
                <CardHeader className="font-ocra text-2xl uppercase text-purple-600">
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardDescription className="font-courier text-md text-justify indent-4">
                  {project.description}
                </CardDescription>
                <CardContent className="mt-2 flex flex-col items-center">
                  <h2 className="font-ocra text-sm uppercase text-orange-500">
                    Tech Stack
                  </h2>
                  <div className="mt-4 flex flex-row gap-4">
                    {project.stack.map((tech) => {
                      return (
                        <div
                          key={tech.id}
                          title={tech.name}
                          data-tooltip-placement="bottom"
                        >
                          <FaReact
                            name={tech.icon}
                            className="w-10 text-zinc-500 transition-colors duration-500 hover:text-zinc-300"
                          />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className="mt-5 flex flex-col gap-4 overflow-hidden whitespace-nowrap md:flex-row">
                  {project.urls.map((url) => {
                    return (
                      <Link
                        key={url.id}
                        href={url.url}
                        target="_blank"
                        className="font-ocra flex w-full items-center justify-center gap-2 rounded-md border-2 border-green-700 p-2 text-sm uppercase text-zinc-300 transition-colors duration-300 hover:bg-green-700"
                      >
                        {url.type}
                      </Link>
                    );
                  })}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
