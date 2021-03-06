import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {styleHeader}  from '../components/SharedStyles';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow:1 ,
  },
  menuButton :{
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))



const Header = () => {
  const classes = useStyles();  
return (
  <div className={classes.root} style={styleHeader}>
    <AppBar position="fixed">
    <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    Content Management System
    </Typography>
    <Button color="inherit" onClick={() => Router.push(`/add-article`)}>Add Article</Button>
    </Toolbar>
    </AppBar>
  </div>
);
};

export default Header;