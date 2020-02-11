import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Joke() {

  const [joke, setJoke] = useState('');

  useEffect( () => {
    updateJoke();
  }, [])

  const fetchJoke = () => {
    updateJoke();
  }

  function updateJoke () {
    axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept: "application/json"}})
    .then((res) => {
      setJoke(res.data)
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <h5 className="card-title">Dad Joke</h5>
          <p className="card-text">{joke.joke}</p>
          <a className="btn btn-primary" onClick={fetchJoke}>Go somewhere</a>
        </div>
      </div>
    </div>
  )
}
