import React from 'react'
import '../../static/CompStyle.css'
import ASign from './Admin Sign.jsx'
// import ADrawer from './Admin Drawer.jsx'
import AHeader from './Admin Header.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Error from '../Error.jsx';
const Admin = () => {
  return (
    <div className="admin-wrapper">
      <Router>
        <AHeader />
        {/* <ADrawer /> */}
        <Switch>
          <Route exact path="/">
            <ASign />
          </Route>
          <Route sensitive path="/asign">
            <ASign />
          </Route>
          {/* <Route component={Error} /> */}

          {/* 
                    <Route path="/">
                    <Error />
                </Route> */}
        </Switch>
      </Router>
    </div>
  )
}
export default Admin
