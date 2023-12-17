import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [data, setData] = useState('не получен');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
            password1: 'Ты читаешь ответ от сервера',
            password2: 'tra-la-la'}),
    };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/default',  requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

  return (
    <>
        Ответ от вервера:
        <br/>
        {data.password1}
    </>
  )
}

export default App
