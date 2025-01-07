import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

import eyeImg from "../../assets/images/eye.png";
import axios from "axios";

function Users() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

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

  function handleDelete(id) {
    let conf = confirm("Do you really want to delete this user?");

    if (!conf) {
      return;
    }

    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        let copied = [...users];
        let newArray = copied.filter((user) => {
          return user.id != id;
        });
        setUsers(newArray);
      })
      .catch((error) => console.log(error));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let user = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      avatar: avatar,
    };

    axios
      .post("https://reqres.in/api/users", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 201) {
          console.log("Created");
          let copied = [...users];
          copied.push(response.data);
          setUsers(copied);
        }

        setSuccessMsg("Foydalanuvchi muvaffaqiyatli qo'shildi");

        setFirstname("");
        setLastname("");
        setEmail("");
        setAvatar("");
      });
  }

  return (
    <div className={styles.homeContent}>
      <h2 className={styles.addUserHeading}>Add user</h2>
      <form className={styles.form}>
        <div className={styles.box}>
          <label htmlFor="email" className={styles.formLabel}>
            <span>Email</span>
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="email"
            id="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // autoComplete="username"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="firstname" className={styles.formLabel}>
            <span>First name</span>
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter firstname..."
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            // autoComplete="username"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="lastname" className={styles.formLabel}>
            <span>Last name</span>
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter lastname..."
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            // autoComplete="username"
          />
        </div>

        <div className={styles.box}>
          <label htmlFor="avatar" className={styles.formLabel}>
            <span>Avatar</span>
          </label>
          <input
            className={styles.formInput}
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Enter avatar..."
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className={styles.actionButtons}>
          <button
            type="submit"
            className={styles.btnSubmit}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className={styles.wrapper}>
        {loading && <p>Loading...</p>}

        {successMsg && <div className={styles.successMsg}>{successMsg}</div>}
        <div className={styles.cards}>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <div className={styles.card} key={user.id}>
                  <h2>ID: {user.id}</h2>
                  <h2>First name: {user.first_name}</h2>
                  <h2>Last name: {user.last_name}</h2>
                  <h3>Email: {user.email}</h3>
                  <img
                    className={styles.userImg}
                    src={user.avatar}
                    alt={user.first_name}
                  />

                  <div className={styles.action}>
                    <button
                      className={styles.btnDelete}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Users;
