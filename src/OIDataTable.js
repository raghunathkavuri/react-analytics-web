function OIDataTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('option-chain-data-url')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>OI Data Table</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Option Type</th>
              <th>Strike Price</th>
              <th>OI</th>
            </tr>
          </thead>
          <tbody>
            {data.oiData.map((row) => (
              <tr key={row.strikePrice}>
                <td>{row.optionType}</td>
                <td>{row.strikePrice}</td>
                <td>{row.oi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OIDataTable;
