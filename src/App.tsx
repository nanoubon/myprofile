import "./App.css";
import "./index.css";
import Avatar from "./components/Avatar";
import Personal from "./components/Personal";

function App() {
  return (
    <>
    <div className="gradient_bg">
      <div className=" container">
      <div> <Avatar/></div>
      <div> <Personal/></div>
      </div>
      </div>
    </>
  );
}

export default App;
