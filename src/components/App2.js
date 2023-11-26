import React, { useEffect, useState } from 'react';

function App2() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  // data.length > 0 &&
  //   count.map((ind) => {
  //     logins.push(ind.login);
  //   });
  useEffect(() => {
    data.forEach((user) => {
      throttle(get, 500);
    });

    function get() {
      fetch(`https://api.github.com/users/${user.id}/repos`)
        .then((res) => res.json())
        .then((d) => {
          setCount(d);
        });
    }

    data != null && data.forEach((user) => {});
  }, [data]);

  return (
    <>
      {data && <h1>asdasd</h1>}

      <div>App2</div>
    </>
  );
}

export default App2;
