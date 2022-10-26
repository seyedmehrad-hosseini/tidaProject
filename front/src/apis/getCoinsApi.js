import axios from "axios";

const getCoins = async (token, callback) => {
  const data = {
    token,
  };
  try {
    const response = await axios.request({
      baseURL: `http://localhost:9001/api/coins`,
      method: "get",
      data,
    });
    console.log(response.data);
    callback(true, response.data);
  } catch (error) {
    callback(false , 'error')
  }
};
export default getCoins;
