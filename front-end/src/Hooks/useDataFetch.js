import { useState, useEffect } from 'react';

function useDataFetch(dataSource, param) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await dataSource(param);

      if (response) {
        setResult(response);
      }
    }
    fetchData();
  }, [dataSource, param]);
  return { result };
}

export default useDataFetch;
