import React, { useEffect, useState} from 'react';

const Home = () => {

    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])
    console.log(users)


    return (
    <div  className="container">

        {
            users.map(el => (
                <div key={el.id}>
                    <h4>{el.name}</h4>
                    <p>{el.phone}</p>
                </div>
            ))
        }


        <button onClick={() => setCounter(counter + 1)}>click me</button>
        <h1>Home {counter}</h1>
    </div>

    );
};

export default Home;