import "./App.css";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="site-wrapper">
      <div className="container-main">
        <Avatar />
        <Personal />
        <Timeline />
        <Projects />
        <footer className="site-footer">
          <p className="footer-text">Pranchai Himakoon &nbsp;·&nbsp; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
