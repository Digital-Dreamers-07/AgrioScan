import { useEffect, useState } from "react";
import { getHistory } from "../api/history.api";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
      <h2>History</h2>
      {history.length === 0 && <p>No history yet</p>}
      {history.map((item, i) => (
        <div key={i}>
          <p>{item.actionType}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
