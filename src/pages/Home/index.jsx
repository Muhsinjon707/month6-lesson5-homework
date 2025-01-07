import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./index.module.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        if (response.status == 200) {
          setUsers(response.data.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  let navigate = useNavigate();

  function redirectDetail(user) {
    navigate(`/details/${user.id}`, { state: user });
  }

  return (
    <div className={styles.wrapper}>
      {loading && <p>Loading...</p>}

      <h2>Our users</h2>

      <div className={styles.cards}>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div className={styles.card} key={user.id}>
                <h2>ID: {user.id}</h2>
                <h3>Email: {user.email}</h3>
                <h2>First name: {user.first_name}</h2>
                <h2>Last name: {user.last_name}</h2>
                <img className={styles.userImg} src={user.avatar} alt={user.first_name} />

                <button
                  className={styles.moreInfo}
                  onClick={() => redirectDetail(user)}
                >
                  More
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
