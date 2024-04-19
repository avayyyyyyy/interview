import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState();

    const fetchData = async () => {
        const res = await fetch("https://randomuser.me/api/");
        const jsonData = await res.json();
        setData(jsonData);
    };

    fetchData();

  return (
    <div>
        <div>
          <h1>User Data</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
    </div>
  );
};

export default App;
