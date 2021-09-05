import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Personas } from "./Screens/Personas";
import { Colors } from "./Screens/Colors";
import { Typography } from "./Screens/Typography";
import { Buttons } from "./Screens/Buttons";
import { Iconography } from "./Screens/Iconography";
import { Images } from "./Screens/Images";

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
                    <Route path="/buttons">
                        <Buttons />
                    </Route>
                    <Route path="/iconography">
                        <Iconography />
                    </Route>
                    <Route path="/images">
                        <Images />
                    </Route>
                    <Route path="/" exact>
                        <Personas />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
