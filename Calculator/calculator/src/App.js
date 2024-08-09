import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = billValue * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBillValue("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (<div>

    <BillInput billValue={billValue} onSetBillValue={setBillValue} />

    <SelectPercentage percentage={percentage1} onSelectPercentage={setPercentage1}>How did you like the service?</SelectPercentage>

    <SelectPercentage percentage={percentage2} onSelectPercentage={setPercentage2}>How did your friend like the service?</SelectPercentage>

    {billValue > 0 && (<>

      <BillOutput bill={billValue} tip={tip} />

      <Reset onReset={handleReset} />
    </>
    )}
  </div>
  )
}

function BillInput({ billValue, onSetBillValue }) {
  return (
    <div>
      <label>How much was the bill?</label>

      <input type="text"
        placeholder="Bill Value"
        value={billValue}
        onChange={(e) => onSetBillValue(Number(e.target.value))} />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelectPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelectPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}

function BillOutput({ bill, tip }) {
  return <div>
    <h1>You pay ${bill + tip} (${bill} + ${tip})</h1>
  </div>
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>
}

export default App;
