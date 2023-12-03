import "./App.css";
import "./index.css";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="gradient_bg">
        <div className=" container">
          <div>
            
            <Avatar />
          </div>
          <div>
            
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
