// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CodeByBishwo from './components/CodeByBishwo';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {Routes,Route} from 'react-router-dom'
import EditUser from './components/EditUser';
function App() {
  return (
 <>
      <Navbar/>
      <Routes>
        < Route path='/' element= {<CodeByBishwo/>}/>
        < Route path='/all' element= {<AllUsers/>}/>
        < Route path='/add' element= {<AddUser/>}/>
        < Route path='/edit/:id' element= {<EditUser/>}/>
    </Routes>
 </>
  );
}

export default App;
