import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SuppliersList from "./SuppliersList";
import SuppliersMap from "./SuppliersMap";
import useSuppliersData from "./useSuppliersData";
import useLocalisationUser from "./useLocalisationUser";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Suppliers from "./components/Suppliers";
import "./App.css";






function Home() {

    return (
        <div>
            <h2>Bienvenue sur le projet Suppliers</h2>
        </div>
    )
}

const store = configureStore();


const App = () => {

    const userLocalisation = useLocalisationUser();
    console.log(userLocalisation);

    const apiReturn = useSuppliersData();


    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/suppliers">Consulter la liste des fournisseurs</Link>
                        </li>
                        <li>
                            <Link to="/map">Voir la carte</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/supplier">
                        <SuppliersList/>
                    </Route>
                    <Route path="/suppliers">
                        <Provider store={store}>
                            <Suppliers />
                        </Provider>
                    </Route>
                    <Route path="/map">
                        <SuppliersMap
                            suppliers={apiReturn.sup}
                            loadings={apiReturn.load}
                            error={apiReturn.err}
                            localLoading={userLocalisation.load}
                            latitude={userLocalisation.local.latitude}
                            longitude={userLocalisation.local.longitude}
                        />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default App;



