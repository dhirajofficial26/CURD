import { Outlet } from "react-router-dom";
import "./App.css";
import CommonContainer from "./components/CommonContainer";
function App() {
  return (
    <>
      <CommonContainer />
      <Outlet />
    </>
  );
}

export default App;
