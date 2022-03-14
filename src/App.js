import "./App.css";

import { Options } from "./pages/entry/Options";
import { SummaryForm } from "./pages/summary/SummaryForm";

function App() {
  return (
    <>
      <SummaryForm />
      <br />
      <Options optionType={"scoops"}></Options>
    </>
  );
}

export default App;
