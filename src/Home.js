import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiinterceptor from "./Interceptors";
import { setTitle, setData } from "./addTask";
import sortfun from "./genericfun";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, data } = useSelector((state) => state.mySlice4);

  const addTask = async () => {
    try {
      let bodyContent = {
        title: title,
      };

      let response = await apiinterceptor.post("todo/createTodo", bodyContent);
      if (response) {
        getAll();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAll = async () => {
    try {
      let response1 = await apiinterceptor.get("todo/getAll");
      // const result =sortfun(response1.data.list,"title");
      dispatch(setData(response1.data.list));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  function Log_out() {
    navigate("/Login");
    localStorage.clear();
    window.location.reload();
  }
  // console.log("ssss@@@@@", data);

  return (
    <div className="Task-1">
      <header className="header-1">
        <div className="Head-1">
          <h4>TODO App</h4>
        </div>
        <div className="Head-2">
          <p>Profile</p>
          <p onClick={Log_out}>Logout</p>
        </div>
      </header>
      <div className="form-3">
        <input
          type="text"
          placeholder="Title"
          className="input3"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        {/* <input type="text" placeholder="Description" className="input3" /> */}
        <button
          id="Add-btn"
          className="input3"
          onClick={(e) => {
            addTask();
          }}
        >
          ADD TO TASK
        </button>
      </div>
      <div className="tabel-di">
        <table className="table-1" cellspacing="0">
          <tr>
            <th onClick={() => sortfun(data, "title")}>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
            <th>DELETE</th>
          </tr>

          {data.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>inprogress</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>Delete</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;
