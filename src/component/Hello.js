import React,{useState} from 'react'
import logo from '../logo192.png'
import { Link } from 'react-router-dom';
function Hello() {
    let name = {
        fname: '',
        lname: ''
    }

const [initialValue, setInitialValue] = useState(name);
    const clickImage = () => {
        console.log('clicked')
        window.open("https://www.google.com");
    }

    const changeInput = (event) =>{
        console.log(event.target.value);
        setInitialValue({
            ...initialValue,
            [event.target.name]: event.target.value
        })
            
      }

  return (
    <div>
        <h1>Functional Component</h1>
        <h2>{initialValue.fname} {initialValue.lname}</h2>
        <input type="text" name="fname" onChange={changeInput}/>
        <input type="text" name="lname" onChange={changeInput}/>
        <img src={logo} onClick={clickImage} alt="logo" />
        <Link to="/about">
            <button type="submit" >About Us</button>
        </Link>
    </div>
  )
}

export default Hello