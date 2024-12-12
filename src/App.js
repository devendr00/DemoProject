import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Protecting from "./Protecting";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { setUserData } from "./commonSlice";

const App = () => {
  const { userData } = useSelector((state) => state.mySlice2);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const getData = async () => {
      {
        const res = localStorage.getItem("userData");
        if (res) {
          console.log(typeof res);
          let resData = JSON.parse(res);
          dispatch(setUserData(resData));
        }
      }
    };
    getData();
  }, []);
  {
    /* <Route
            path="/"
            element={
              <Protecting>
                <Login />
              </Protecting>
            }
          />

          <Route
            Component={localStorage.getItem("accessTokenn")}
            path="/Login"
            element={<Login />}
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Home"
            element={
              <Protecting>
                <Home />
              </Protecting>
            }
          /> */
  }

  // const isUserLoggedIn = localStorage.getItem("login");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<SignUp />} /> */}
          <Route
            path="/"
            element={
              userData.accessToken ? (
                <Navigate to="/Home" />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="*"
            element={
              userData.accessToken ? (
                <Navigate to="/Home" />
              ) : (
                <Navigate to="Login" />
              )
            }
          />
          {!userData.accessToken && (
            <>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/signUp" element={<SignUp />}></Route>
            </>
          )}

          {userData.accessToken && (
            <>
              <Route path="Home" element={<Protecting element={Home} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
