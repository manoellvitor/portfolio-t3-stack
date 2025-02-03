import About from "./components/About";
import Projects from "./components/Projects";
import WorkingOn from "./components/WorkingOn";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col p-4">
      <About />
      <Projects />
      <WorkingOn />
    </main>
  );
}
