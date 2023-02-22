import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SearchBox from '../src/Components/Search-Component/Search';
import {ChangeEvent} from 'react';
import { useState } from 'react';
import CardCatagory from '../src/Components/Card-Component/Card-catagory';


export type DataAccess = {
 
  name: string,
  gender: string,
  email: string,
  
  cell: string,
  Picture: string
}

// type pictures= {
//   medium: string
// }
// type NameObject = {
//   first: string,
//   last: string
// }
function App() {
  
  const [SearchField, setSearchField]= useState('');
  const [Users, setUsers] = useState<DataAccess[]>([]);
  // const []

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15').then((data)=>{
      return data.json();
    }).then((data)=>{
  
      console.log(data.results)

     let user:DataAccess[] = data.results.map((info:any)=>{

      const { first, last } = info.name;
      const name = `${first} ${last}`;
      const pic=  info.picture.medium;
        return {
          name:name,
          gender: info.gender,
          email: info.email,
          cell: info.cell,
          Picture: pic
        }
    

       
        
      })
      setUsers(user)
      // 
      

      // const users: DataAccess[] = data.results.map((info: DataAccess) => {
      //   return {
      //     name: `${info.name.first} ${info.name.last}`,
      //     gender: info.gender,
      //     email: info.email,
      //     cell: info.cell,
      //   };
      // });
      
      // setUsers(users);
      
    }
    )
  },[])

  // console.log(Users)



  

  const ChangeHandler = (event: ChangeEvent <HTMLInputElement>):void =>{
    let input=event.target.value;
    setSearchField(input)
  };


  
  return (
    <div className="App">

    
      <SearchBox type='Search' txtHolder='Search Users' className='searchbox' changeON={ChangeHandler} ></SearchBox>
      <CardCatagory user={Users}/>
    </div>
  );
}

export default App;
