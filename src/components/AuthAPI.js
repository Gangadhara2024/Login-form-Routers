import axios from "axios";

const authAPI = () => {
  const signupUser = async (signupInfo) => {
    try {
      await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/signup",
        method: "POST",
        data: signupInfo,
      });
      return { success: true };
    } catch (error) {
      alert("signup failed");
      return { success: false };
    }
  };

  const loginUser = async (credentials) => {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
        method: "POST",
        data: credentials,
      });
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      return { success: true };
    } catch (error) {
      alert("login failed");
      return { success: false };
    }
  };
  return { signupUser, loginUser };
};

export default authAPI;
