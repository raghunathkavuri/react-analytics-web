import React, { useState, useEffect } from "react";

function CallsVsPutsOI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("option-chain-data-url")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Calls vs Puts OI</h1>
      {data ? (
        <Chart
          type="bar"
          data={{
            labels: data.labels,
            datasets: [
              {
                label: "Calls OI",
                data: data.callsOI,
                backgroundColor: "#20b2aa",
              },
              {
                label: "Puts OI",
                data: data.putsOI,
                backgroundColor: "#2e8b57",
              },
            ],
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default CallsVsPutsOI;