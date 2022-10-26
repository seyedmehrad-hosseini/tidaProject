import React, { useEffect, useState } from "react";
import styles from "./_style.module.scss";
import { Button } from "@mui/material";
import checkLoginSucces from "../../apis/loginApi";

const Login = () => {
  const [changeInputUserName, setChangeInputUserName] = useState();
  const [changeInputPass, setChangeInputPass] = useState();

  return (
    <div className={styles.loginBody}>
      <div className={styles.loginBox}>
        <div className={styles.formBox}>
          <div className={styles.inputBody}>
            <span className={styles.inputTitle}>User name:</span>
            <input
              value={changeInputUserName}
              onChange={(e) => setChangeInputUserName(e.target.value)}
              className={styles.formInputComponent}
            />
          </div>

          <div className={styles.inputBody}>
            <span className={styles.inputTitle}>Password:</span>
            <input
              value={changeInputPass}
              onChange={(e) => setChangeInputPass(e.target.value)}
              className={styles.formInputComponent}
            />
          </div>

          <div
            className={styles.buttonBox}
            onClick={() =>
              checkLoginSucces(changeInputUserName, changeInputPass)
            }
          >
            <Button sx={{ height: "30px" }} variant="contained">
              ok
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
