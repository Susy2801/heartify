import "./App.css";
import Header from "./Components/Header/header";
import Start from "./Components/Login page/Starting page/Starting";
import Login from "./Components/Login page/Login/Login";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const isLogin = localStorage.getItem("isLogin");

  {
    return isLogin ? (
      <div className="App">
        <Header />
      </div>
    ) : (
      <div className="App">
        <Start />
      </div>
    );
  }
}

export default App;
