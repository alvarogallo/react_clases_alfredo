import "./estilos.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();

    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 
    const [isLogin,setIsLogin] = useState(false);

    const onSubmit = async() => {
      try {
        setIsLogin(true);
        const respuesta = await axios.post('http://derrama.net/api/RP/login',{email,password});
        
        
        if(respuesta.data.access_token){
            window.localStorage.setItem('data', JSON.stringify(respuesta?.data))
            navigate("/informacion")
        }
 
      }
      catch {
        alert("Contrasena Incorrecta")
      }
      setIsLogin(false);
    }
    //console.log(password);

    return (
         <div className="container">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text" onChange={(event) => setEmail(event.target.value)} name="email" className="form-control" placeholder="Username" />
  </div>
   <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-lock"></i></span>
    </div>
    <input type="text" onChange={(event) => setPassword(event.target.value)} name="password" className="form-control" placeholder="Password" />
  </div>
  { isLogin ? <h1>Cargando</h1> : <button type="button" onClick={(event) => onSubmit()}  name="login" className="btn btn-secondary btn-block">LOGIN</button> }
   
   <div className="message">
  <div><input type="checkbox" /> Remember ME</div>
   <div><a href="#">Forgot your password</a></div>
   </div>
     </form>
              <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-google"></i></a>
              </div>
            </div>
          </div>
         </div>   
    )
}
export default Login;