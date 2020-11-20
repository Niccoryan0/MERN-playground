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
  const updateDate = e => setDate(e.target.value);

  const [users, setUsers] = useState([]);
  const params = useParams();
  useEffect(async () => {
    axios.get('http://localhost:3000/exercises/' + params.id)
    .then(response => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
    })      
    .catch(function (error) {
      console.log(error);
    })

    axios.get('http://localhost:3000/users/')
    .then(response => {
      if (response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }
  
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={submitForm}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
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
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}

export default EditExercise;