import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Personas } from "./Screens/Personas";
import { Colors } from "./Screens/Colors";
import { Typography } from "./Screens/Typography";
import { Buttons } from "./Screens/Buttons";
import { Iconography } from "./Screens/Iconography";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/personas">
                        <Personas />
                    </Route>
                    <Route path="/colors">
                        <Colors />
                    </Route>

                    <Route path="/typography">
                        <Typography />
                    </Route>
                    <Route path="/buttons">
                        <Buttons />
                    </Route>
                    <Route path="/iconography">
                        <Iconography />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
