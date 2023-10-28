// import Users from './components/Users';

import './App.css';
import { Users } from './components/Users';
// import { UserName } from './components/UserName';

 
  const users = [
    {
      name:"Asan",
      age:20
    },
    {
      name:"Uson",
      age:22
    },
    {
      name:"Aziz",
      age:21
    }
  ]
  
  function App(){
    return(
    <div>
      <Users userInfo={users}/>
    </div>
  )
}

export default App;
