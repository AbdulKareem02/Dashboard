import './App.css'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Inventory from './components/Inventory'
import Orders from './components/Orders'
import Shopping from './components/Shopping'
import Channel from './components/Channel'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Orders} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/shopping" component={Shopping} />
        <Route exact path="/channel" component={Channel} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
