import React, {useState,useEffect} from 'react';
import ProfileInfo from './ProfileInfo';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Info = (props) =>{
    let [userState,userSetState] = useState({
        name: 'amal',
        age: 26,
        btnName: 'click me'
    }); 
    useEffect(() => {
        if(!props.location.userProps){
            props.history.push("/users");
        }
    })
    // console.log("info accessed props : ", props.location.userProps);
    const nameHandler = () =>{
        props.history.push("/users");
    } 
    return (<div>
        <p style={{ margin: "10px", marginLeft: "60px", fontSize: '38px', fontWeight: '400'}}>User Details </p>
                <ProfileInfo
                userProps= {props.location.userProps}>
                </ProfileInfo>
                <Button variant="contained" color="secondary"  onClick={nameHandler} style={{marginLeft: "60px"}}>
                    <ArrowBackIcon></ArrowBackIcon>Back
                </Button>
            </div>)
}

export default Info;