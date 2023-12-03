import "./App.css";
import "./index.css";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="gradient_bg md:p-5">
        <div className=" container">
          <div>
            <Avatar />
          </div>
          <div className="pb-5">
            <Personal />
          </div>
          <div>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
