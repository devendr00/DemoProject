import apiinterceptor from "./Interceptors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { setEmail, setName, setPassword } from "./authSlice.js";
import { setLoading, setUserData } from "./commonSlice.js";

function SignUp() {
  const dispatch = useDispatch();
  const { first, email, password } = useSelector((state) => state.mySlice);
  const { loading } = useSelector((state) => state.mySlice2);

  const saveUser = async () => {
    try {
      dispatch(setLoading(true));
      let frm = new FormData();

      frm.append("name", first);
      frm.append("email", email);
      frm.append("password", password);
      let { data } = await apiinterceptor.postForm("auth/signup", frm);

      if (data.success) {
        dispatch(setUserData(data.data));
        localStorage.setItem("userData", JSON.stringify(data.data));
      } else {
        alert(data.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log(e);
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="Body-2">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <form className="form-2">
          <div className="title-2">
            <h1>Sign Up</h1>
            <p>to make your time productive ✌️</p>
          </div>
          <div className="form-content2">
            <div className="fullname">
              <label htmlFor="firstname" className="req-2">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="first"
                className="input-2"
                value={first}
                onChange={(e) => {
                  // setFirst(e.target.value);
                  dispatch(setName(e.target.value));
                }}
                required
              />

              <label htmlFor="LastName" className="re">
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                name="last"
                className="input-2"
                // value={last}
              />
            </div>

            <label htmlFor="email-1" className="req-2">
              Email Address
            </label>
            <input
              type="email"
              id="email-1"
              name="email"
              className="input-2"
              value={email}
              onChange={(e) => {
                // setEmail(e.target.value);
                dispatch(setEmail(e.target.value));
              }}
              required
            />
            <br></br>
            <br></br>

            <label htmlFor="password-1" className="req-2">
              Password
            </label>
            <input
              type="text"
              id="password-1"
              name="password-1"
              className="input-2"
              value={password}
              onChange={(e) => {
                // setPassword(e.target.value);
                dispatch(setPassword(e.target.value));
              }}
              required
            />

            <div className="button-su">
              <button
                type="button"
                className="btn-2"
                onClick={() => saveUser()}
              >
                Sign Up
              </button>
            </div>
            <div className="link-2">
              <p>
                Already a user?<Link to="/Login">Login</Link>
              </p>
              <br></br>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
export default SignUp;
