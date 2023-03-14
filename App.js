import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [user, setUser] = useState({
    name : '',
    email : '',
    address : ''
  })
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState([]);
  
  const [users, setUsers] = useState([]);
  

  const chnageData = (e) =>{
    debugger
    setUser({...user, [e.target.name] : e.target.value})
  }
  const addUser = (e)=>{
    e.preventDefault();
    const user = {
      name,
      email,
      address
    };
    if(edit){
      // update user
      let copy = [...users];
      Object.assign(copy[active],user)
      setUsers(copy)
      setUser(copy)
      setEdit(false)
      setActive(null)
    }else{
      //add user
      setUsers([...users,user])
    }
    setName("");
    setEmail("");
    setAddress("");
  };
  const editHndller=(index)=>{
    const user =users[index]

    setName(user.name)
    setEmail(user.email)
    setAddress(user.address)

    setActive(index);
    setEdit(true);
  };
  const deleteUser = (user)=>{
    let copy = users.filter(item => item!==user);
    setUsers([...copy])
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col -xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addUser}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.name}
                  onChange={chnageData}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={chnageData}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.address}
                  onChange={chnageData}
                  name="address"
                />
                <br />
              </div>
              <button className="btn btn-success form-control">
                {
                  edit? "Update":"Add"
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <div >
      <table className="table table-striped-columns mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      
      {
        users.map((user,index)=>{
          return(
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
              <button className="btn btn-info" onClick={()=>editHndller(index)} >Edit</button>
            </td>
            <td>
            <button className="btn btn-danger"onClick={()=>deleteUser(user)} >Delete</button>
            </td>
          </tr>
        )})
      }
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
