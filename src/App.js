import Main from "./components/main/index.js";
import Footer from "./components/footer/index.js";
import Projects from "./components/projects/index.js";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* <center><Main /></center> */}

      <HashRouter basename={process.env.PUBLIC_URL}>
        <>
          <center>
            <Route path={"/"} component={Main} exact />
          </center>

          <Route path={"/projects"} component={Projects} />
        </>
      </HashRouter>
      <center>
        <Footer />
      </center>
    </div>
  );
}

export default App;
