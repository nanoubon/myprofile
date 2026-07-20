import "./App.css";
import { useReveal } from "./hooks/useReveal";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

function App() {
  useReveal();

  return (
    <div className="scene">
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="bg-grid" aria-hidden="true" />

      <div className="container-main">
        <Avatar />
        <Personal />
        <Timeline />
        <Projects />
        <footer className="site-footer" data-reveal>
          <p className="footer-text">
            Pranchai Himakoon &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
