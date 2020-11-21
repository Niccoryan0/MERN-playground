import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = () => {
  const [username, setUsername] = useState('');
  const updateUsername = e => setUsername(e.target.value);
  const [description, setDescription] = useState('');
  const updateDescription = e => setDescription(e.target.value);
  const [duration, setDuration] = useState(0);
  const updateDuration = e => setDuration(e.target.value);
  const [date, setDate] = useState(new Date());
  const updateDate = date => setDate(date);

  const [users, setUsers] = useState([]);
  useEffect(async () => {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
          setUsername(response.data[0].username);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }
  
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={submitForm}>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control"
              value={username}
              onChange={updateUsername}>
              {
                users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={updateDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={updateDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={updateDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}

export default EditExercise;