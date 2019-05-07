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
      <form onSubmit={handleSubmit}  name="login">
        <div >
          <div>
            <input type="email" placeholder="E-mail" onChange= {e => setUserName( e.target.value)}/>
          </div>
        </div>
        <div>
          <div>
            <input type="password" placeholder="Password" onChange= {e => setPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
    
  );
  
}


