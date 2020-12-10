import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import axios from 'axios';

class User extends Component {
  state = {
    data:[]
  }
  componentWillMount() {
    console.log("asasds");
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            if(response.data){
                this.setState({
                    data: response.data
                })
            }
            console.log("fetched data: ",this.state.data);
        })
        .catch(err =>{
            console.log(err);
        });
  }
  render() {
    const user = this.state.data.map(user=>{
            return (<li style={{ margin: '10px', display: 'inline-block' }}>
                        <NavLink to="/user-info">{user.name}</NavLink>
                    </li>)
        });
    return (
        <div>
            <p>Showing users page </p>
            <nav>
                <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
                    {user}
                </ul>
            </nav>
        </div>
    )
  }
}

export default User;