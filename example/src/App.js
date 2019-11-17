import React, { Component } from 'react'

import { MaterialUIAdmin } from 'material-ui-admin'
import SideDrawer from './SideDrawer'
import SideMenu from './sideMenu'

export default class App extends Component {
  render() {
    return (
      <div>
        <MaterialUIAdmin title='Material UI Admin' sideDrawer={<SideDrawer />} sideMenu={<SideMenu />}>
          <h1>Dashboard</h1>
        </MaterialUIAdmin>
      </div>
    )
  }
}
