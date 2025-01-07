import styles from "./index.module.css"
import { useNavigate, useLocation } from 'react-router-dom'

function Details() {
    const location = useLocation();
    const navigate = useNavigate();

    function ReredirectUser() {
        navigate("/");
    }
    
    const user = location.state;
    console.log(location.state);
    return (
      <div className={styles.userContent}>
        <div className={styles.top}>
          <img
            className={styles.avatar}
            src={user.avatar}
            alt={user.first_name}
          />
          <div className={styles.additional}>
            <h2 className={styles.myHeading}>Given User</h2>
            <h2 className={styles.box}>
              ID:
              <span>{user.id}</span>
            </h2>
            <h2 className={styles.box}>
              Email:
              <span>{user.email}</span>
            </h2>
            <h2 className={styles.box}>
              User fullname:
              <span>
                {user.first_name} {user.last_name}
              </span>
            </h2>
          </div>
        </div>
        <div className={styles.bottom}>
            <button className={styles.backBtn} onClick={ReredirectUser}>Back</button>
        </div>
      </div>
    );
}

export default Details