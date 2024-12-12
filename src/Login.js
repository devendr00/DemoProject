import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import apiinterceptor from "./Interceptors";
import { Link } from "react-router-dom";
import { setEmail1, setPassword1 } from "./authSlice2";
import { setLoading, setUserData } from "./commonSlice";

const Login = () => {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.mySlice1);

  const { loading } = useSelector((state) => state.mySlice2);

  const loginUser = async () => {
    try {
      dispatch(setLoading(true));
      let bodyContent = {
        email: email,
        password: password,
      };

      let { data } = await apiinterceptor.post("auth/login", bodyContent);

      if (data.success) {
        dispatch(setUserData(data.data));
        localStorage.setItem("userData", JSON.stringify(data.data));
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log("error", e);
      alert(e.response.data.errors);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="Body-1">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <form className="form-1">
          <div className="title-1">
            <h1>Sign in to your account</h1>
            <p>to add your task✌️</p>
          </div>
          <div className="form-content">
            <label htmlFor="first" className="req">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-1"
              value={email}
              onChange={(e) => {
                dispatch(setEmail1(e.target.value));
              }}
              required
            />
            <br></br>
            <br></br>
            <label htmlFor="password" className="req">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="input-1"
              value={password}
              onChange={(e) => {
                dispatch(setPassword1(e.target.value));
              }}
              required
            />
            <br></br>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <label>Remember Me</label>
            </div>
            <br></br>

            <div className="button-cs">
              <button
                type="submit"
                className="btn1"
                onClick={(e) => {
                  e.preventDefault();
                  loginUser();
                }}
              >
                Submit
              </button>
            </div>
            <div className="linkk">
              <p>
                New here?<Link to="/SignUp">Register</Link>
              </p>
              <br></br>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default Login;
