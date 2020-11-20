import React from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = React.useState('');
  const updateUsername = e => setUsername(e.target.value)

  const submitUser = () => {
    e.preventDefault();

    const user = {
      username: username
    }

    console.log(user);

    axios.post('http://localhost:3000/users/add', user)
      .then(res => console.log(res.data));

    setUsername('');
  }

  return(
<div>
        <h3>Create New User</h3>
        <form onSubmit={submitUser}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={updateUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Account" className="btn btn-primary" />
          </div>
        </form>
      </div>
  )
}

export default CreateUser;