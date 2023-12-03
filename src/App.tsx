import "./App.css";
import "./index.css";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="gradient_bg">
        <div className=" container p-20 md:py-10 px-10 m-0">
          <div className="pb-10">
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
