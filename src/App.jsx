import { createContext, useState } from "react";
import DisplayData from "./DisplayData";
import GetData from "./GetData";
import "./style.css";

export const CreateContent = createContext();

function App() {
  const [data, setData] = useState("");

  return (
    <div className="container">
      <div className="form-conn">
        <CreateContent.Provider value={{ data, setData }}>
          <GetData />
          <DisplayData />
        </CreateContent.Provider>
      </div>
    </div>
  ); a
}

export default App;
