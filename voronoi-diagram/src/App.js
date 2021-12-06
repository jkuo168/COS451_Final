import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import TutorialPage from "./views/TutorialPage";
import DemoPage from "./views/DemoPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tutorial" component={TutorialPage} />
          <Route exact path="/demo" component={DemoPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
