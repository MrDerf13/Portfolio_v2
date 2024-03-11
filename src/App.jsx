import Contact from "./Containers/Contact/Contact";
import Skills from "./Containers/Skills/Skills";
import Projects from "./Containers/Projects/Projects";
import AboutMe from "./Containers/AboutMe/AboutMe";

function App() {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact style={true} />
    </>
  );
}

export default App;
