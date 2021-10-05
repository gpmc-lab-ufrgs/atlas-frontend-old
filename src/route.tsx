import {
  BrowserRouter as Router,
  Switch,
  Route as Path,
} from "react-router-dom";
import { Main } from "./pages"

function Route() {
  return (
    <Router>
      <Switch>
        <Path path="/"><Main/></Path>
      </Switch>
    </Router>
  );
}

export default Route;
