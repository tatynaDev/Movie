import React, {useState} from 'react';

const Blog = () => {

    const [data, setData] = useState({
        name: "",
        age: "",
        number: "",
    })

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }


    const getValue = () =>{
        if(data.age >= 18){
            alert("Success!")
        }else{
            alert(`You're young yet! ${data.name}`)
        }
    }

    return (

        <div className="container">
            <div>
                <input onChange={handleChange} type="text" placeholder='your name' name="name"/>
                <input onChange={handleChange} type="number" placeholder='your age' name="age"/>
                <input onChange={handleChange} type="number" placeholder='your number' name="number"/>
                <button onClick={getValue}>login</button>
            </div>
        </div>
    );
};

export default Blog;