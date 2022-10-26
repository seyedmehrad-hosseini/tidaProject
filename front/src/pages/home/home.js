import React, { useEffect, useState } from "react";
import getCoins from "../../apis/getCoinsApi.js";
import SelectItem from "../../components/selectItem/selectItem.js";
import Diagram from "../../components/XYDiagram/xyDiagram";
import styles from "./_style.module.scss";

const Home = () => {
  const [coins, setCoins] = useState(null);
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    getCoins(userToken, (isOk, data) => {
      if (isOk) {
        setCoins(data);
      } else {
        alert('data')
      }
    });
  }, []);

  return (
    <div className={styles.productListBox}>
      <div className={styles.box}>
        <div className={styles.diagram}>
          <Diagram data={coins} />
        </div>
        <div className={styles.selectData}>
          <SelectItem data={coins} />
        </div>
      </div>
    </div>
  );
};

export default Home;
