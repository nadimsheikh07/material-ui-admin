# material-ui-admin

> material ui admin

[![NPM](https://img.shields.io/npm/v/material-ui-admin.svg)](https://www.npmjs.com/package/material-ui-admin) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-admin
```

## Usage

```jsx
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

```

## License

MIT © [nadimsheikh07](https://github.com/nadimsheikh07)
