import axios from "axios";

const checkLoginSucces = async (username, password) => {
  const data = {
    username,
    password,
  };
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api/user",
      method: "post",
      data,
    });
    console.log(response.data);

    if (!response.data.token) throw new Error("not login");

    localStorage.setItem("token", response.data.token);
    window.location.reload();
  } catch (error) {
    alert("user or pass is incurrect");
  }
};
export default checkLoginSucces;
