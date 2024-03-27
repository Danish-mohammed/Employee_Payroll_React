import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Hello from './component/Hello'
import About from './component/About'
import EmployeeForm from './component/EmployeeForm';
import Home from './component/EmployeeHome'
class App extends React.Component {

  render() {
    return(
      <div>
        <h1>App Component</h1>
        <nav>
          <Link to="/">Hello</Link> |
          <Link to="/about">About</Link> | 
          <Link to="/add">Add Employee</Link>

        </nav>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/update/:id" element={<EmployeeForm />} />
      </Routes>
      </div>
    )
  }
}

export default App