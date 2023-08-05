import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SearchBox from '../src/Components/Search-Component/Search';
import {ChangeEvent} from 'react';
import { useState } from 'react';
import CardCatagory from '../src/Components/Card-Component/Card-catagory';
import { Console } from 'console';


export type DataAccess = {
 
  name: string,
  gender: string,
  email: string,
  
  cell: string,
  Picture: string
}

function App() {
  
  const [SearchField, setSearchField]= useState('');
  const [Users, setUsers] = useState<DataAccess[]>([]);
  const [newUsers, setNewUsers] = useState<DataAccess[]>([]);
  // const []



  
  useEffect(()=>{

    let input = SearchField.toLowerCase();
    let newUser= Users.filter((item)=>{
       return item.name.toLowerCase().includes(input);
    })

    setNewUsers(newUser)
  },[SearchField,Users])



  console.log('This is new U',newUsers)
 

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=55').then((data)=>{
      return data.json();
    }).then((data)=>{

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
 
   
    }
    )
  },[])





  

  const ChangeHandler = (event: ChangeEvent <HTMLInputElement>):void =>{
    let input=event.target.value;
    setSearchField(input)
  };


  
  return (
    <div className="App">

    
      <SearchBox type='Search' txtHolder='Search Users' className='searchbox' changeON={ChangeHandler} ></SearchBox>
      <CardCatagory user={newUsers}/>
    </div>
  );
}

export default App;
