import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px !important',
    marginLeft: '60px !important',
    maxWidth: 500,
  },
  image: {
    width: 60,
    height: 60,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


let Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Paper className={classes.paper}>
    <NavLink to={{
                pathname:"/user-info",
                userProps: props.userProps
                }}
                style={{ textDecoration: 'none' }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.flaticon.com/svg/static/icons/svg/219/219983.svg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.site}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </NavLink>
      </Paper>
    </div>
  );
}


export default Profile;