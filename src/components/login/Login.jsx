import { useState } from "react"
import ScrollComponent from '../scrollComponent/ScrollComponent'
import './login.css'
import ShowTips from "../showTips/ShowTips"

function Login() {
    const initialUserState = {name: "", password:""}
    const initialErrorState = {errorName: "", errorPassword:""}
    
    const [user, setUser] = useState(initialUserState)
    const [errorForm, setErrorForm] = useState(initialErrorState)
    

    const handleFormInput = (e) => {

        setErrorForm(initialErrorState)
        setUser(prevUser => ({...prevUser,[e.target.name]:e.target.value}))
        if ( !e.target.value ) return

        if (e.target.name === "name" && e.target.value.length < 2) {
           return setErrorForm({...errorForm, errorName: "Intoduce un nombre más largo" })
        }
        if (e.target.name === "password" && e.target.value.length < 6 ) {
           return setErrorForm({...errorForm, errorPassword: "Intoduce un password más largo" })
        }
        if (e.target.name === "password" && !e.target.value.match(/\d/)  ) {
            return setErrorForm({...errorForm, errorPassword: "Intoduce almenos un número" })
         }
         if (e.target.name === "password" && !e.target.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)  ) {
            return setErrorForm({...errorForm, errorPassword: "Intoduce almenos un símbolo" })
         }
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(user.name === "" || user.password === "") return
        if(errorForm.errorName || errorForm.errorPassword) return
        
        setUser(initialUserState)
        alert(`welcome ${user.name}`)
    }

  return (
    <>
    <h1>Login</h1>
    <div id="login" className="container-login">
    <ShowTips id="login-tip" message="login con validación simple">
    <h2>Login</h2>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="form-element">
           <label htmlFor="name" >Name</label>
           <input 
                type="text" 
                id="name" 
                name="name" 
                value={user.name} 
                placeholder="Introduce tu nombre" 
                onChange={handleFormInput}/>
           {errorForm.errorName ? <span className="errorText">{errorForm.errorName}</span> : null}
        </div>
        <div className="form-element">
           <label htmlFor="password">Password</label>
           <input type="password" id="password" name="password"  value={user.password} placeholder="Introduce tu password" onChange={handleFormInput}/>
           {errorForm.errorPassword ? <span className="errorText">{errorForm.errorPassword}</span> : null}
        </div>
        <button className="form-button">Enviar</button>
      </form>
    <ScrollComponent targetId="login" />
    </ShowTips>
      </div>
    </>

  )
}

export default Login
