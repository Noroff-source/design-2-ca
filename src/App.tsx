import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Colors } from "./Screens/Colors";
import { Typography } from "./Screens/Typography";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/colors">
                        <Colors />
                    </Route>

                    <Route path="/typography">
                        <Typography />
                    </Route>

                    <Route path="/">
                        <h1>home</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
