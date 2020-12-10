import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px !important',
    marginLeft: '60px !important',
    maxWidth: 750,
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));




let ProfileInfo = (props) => {
    
  const classes = useStyles();
  
  if(!props.userProps){
      return <p>Sorry! No data found.</p>
  }
  return (
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className="App" style={{fontWeight: "600"}}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.flaticon.com/svg/static/icons/svg/219/219983.svg" />
            </ButtonBase>
            <Typography gutterBottom variant="subtitle1">
                {props.userProps.name?props.userProps.name:"XXXXXXXX"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              {/* table */}
              <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow key="1">
                                <TableCell component="th" scope="row">
                                    Address
                                </TableCell>
                                <TableCell align="right">
                                    {props.userProps.address.street + "," 
                                    +props.userProps.address.city + "," 
                                    +props.userProps.address.zipcode + "," }</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell component="th" scope="row">
                                Phone
                                </TableCell>
                                <TableCell align="right">{props.userProps.phone}</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell component="th" scope="row">
                                    Website
                                </TableCell>
                                <TableCell align="right">{props.userProps.website}</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell component="th" scope="row">
                                    Company Name
                                </TableCell>
                                <TableCell align="right">{props.userProps.company.name}</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell component="th" scope="row">
                                    Email
                                </TableCell>
                                <TableCell align="right">{props.userProps.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
              {/* table */}
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          <Grid item>
          </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default ProfileInfo;