import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import PlaceToStay from "./PlaceToStay";


function App() {

  return (
    <Router>
      <div >
        <nav>
          <Nav />
        </nav>
        <section>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/PlaceToStay">
              <PlaceToStay />
            </Route>
          </Switch>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
