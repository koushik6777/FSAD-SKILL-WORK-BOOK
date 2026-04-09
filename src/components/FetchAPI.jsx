import { useEffect, useState } from "react";

function FetchAPI() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((res) => res.json())
      .then((data) => setFacts(data.data));
  }, []);

  return (
    <div>
      <h2>Fetch API - Cat Facts</h2>

      <ul>
        {facts.slice(0, 10).map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAPI;