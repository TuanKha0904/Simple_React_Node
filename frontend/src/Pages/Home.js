import React, { useEffect, useState } from "react";

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return (
        <div>{data.status}</div>
    );
}

export default Home;