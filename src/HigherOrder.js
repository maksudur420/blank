import React,{useState,useEffect} from 'react'


const HigherOrder = (ChildComponent) => {

  const NewComponents =()=>{
    const [users,setUsers] =useState([]);
    const [userfilter,setUserFilter]=useState('')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data => setUsers(data))
    },[])

   
    const filterusername = users.filter(({name}) => {
            return name.toLowerCase().indexOf(userfilter.toLowerCase(),0)>=0;
       
  }).map(user=>{
    return(
    <div key={user.name} >
        {user.name}
    </div>
    )
   
  })


    return <ChildComponent filterusername={filterusername} userfilter={userfilter} setUserFilter={setUserFilter} />
  }
  return NewComponents;
}

export default HigherOrder
