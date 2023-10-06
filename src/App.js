import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUpsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetUpsPage from "./pages/NewMeetUpsPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>
          <Route path="/new-meetups" exact>
            <NewMeetUpsPage />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
