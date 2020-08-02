/* eslint-disable react/prop-types */
import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    height: 10,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    marginTop: 30
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    marginTop: 30
  }
})

class MaterialUIAdmin extends React.Component {
    state = {
      open: true
    }

    handleDrawerOpen = () => {
      this.setState({ open: true })
    };

    handleDrawerClose = () => {
      this.setState({ open: false })
    };

    componentDidMount() {
      window.addEventListener('resize', this.resize.bind(this))
      this.resize()
    }

    resize() {
      if (window.innerWidth <= 981) {
        this.handleDrawerClose()
      }
    }

    render() {
      const { classes, children, title, sideDrawer, sideMenu } = this.props
      const { open } = this.state

      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={this.handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                {title}
              </Typography>
              <div className={classes.grow} />
              {sideMenu}
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            {sideDrawer}
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            {children}
          </main>
        </div>
      )
    }
}

export default withStyles(styles)(MaterialUIAdmin)
