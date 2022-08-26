import React from "react";
import "./App.css";
import { InputText } from "primereact/inputtext";

export const Abc: React.FC = () => {
  console.log('hi');
  return <div>hi : Abc</div>;
};

export function Def() {
  console.log('hi');
  // return <div>hi : Def</div>;
}


function App() {
  const [value1, setValue1] = React.useState("");

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Abc/>
      <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
    </div>
  );
}

export default App;
