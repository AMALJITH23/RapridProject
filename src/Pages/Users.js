import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Profile from './Profile'

const Users = () => {
    let [usersState,usersSetState] = useState({
        data: []
    }); 
    useEffect(() => {
        console.log("asasds");
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                if(response.data){
                    usersSetState({
                        data: response.data
                    })
                }
                console.log("fetched data: ",response.data);
            })
            .catch(err =>{
                console.log(err);
                usersSetState({
                    data: []
                })
            });
      }, []);
    


    const user = usersState.data.map(user=>{
        return (<Profile key={user.id}
                    userProps= {user} 
                    style={{ margin: '10px !important'}} 
                    name={user.name} 
                    image={user.image} 
                    site={user.website} />)
    });

    return (<div>
                <p style={{ margin: "10px", marginLeft: "60px", fontSize: '38px', fontWeight: '400'}}>Users </p>
                <nav>
                    <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
                        {usersState.data.length>0?user:<p>No data found</p>}
                    </ul>
                </nav>
            </div>)
}

export default Users;