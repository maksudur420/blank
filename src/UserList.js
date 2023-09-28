import HigherOrder from "./HigherOrder"

const UserList = ({filterusername,setUserFilter,userfilter}) => {
    



  return (
    <div>
        <input type="text" value={userfilter} onChange={(e)=>setUserFilter(e.target.value)} />
       <div>
            {filterusername}
       </div>
        
    
    </div>
  )
}

export default HigherOrder(UserList)
