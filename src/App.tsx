import { useState } from "react";
import "./App.css";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    // 直近5件だけ残す
    const updatedNumbers = [...numbers, newCount].slice(-5);
    setNumbers(updatedNumbers);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="count">{count}</div>
      <div className="button-group">
        <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
      <div className="history">
        <h2>カウント履歴（最新5件）</h2>
        {numbers.map((value, index) => (
          <div key={index} className="history-item">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
