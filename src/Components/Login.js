import React, {useState} from 'react';



export default() => {

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await fetch("http://localhost:4001",{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({"user": userName, "password": password})
        })

    }

    
  const [userName, setUserName] = useState("defaultName")
  const [password, setPassword] = useState("defaultPassword")
   
  return (
    <>
      <div className="background">
        <form onSubmit={handleSubmit}  name="login" className="container pad">
          <div className="row justify-content-around" >
            <input type="email" placeholder="E-mail" onChange= {e => setUserName( e.target.value)} className="col-sm-5 top-space input" />
          </div>
          <div className="row justify-content-around">
            <input type="password" placeholder="Password" onChange= {e => setPassword(e.target.value)} className="col-sm-5 top-space input" />
          </div>
          <div className="row justify-content-around">
            <button type="submit" className="btn btn-primary top-space">Lessa GO</button>
          </div>
        </form>
      </div>
    </>
    
  );
  
}


