import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const{loginWithPopup,
     loginWithRedirect,
     logout,     
     user,
     isAuthenticated 
  } = useAuth0();

  return(
    //
    <div className='App'>
      <h1>INICIO DE SESION</h1>
      <ul>
        
        <li><button onClick={loginWithRedirect}>Login</button></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
      <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>
      {isAuthenticated &&(
      <pre style={{textAlign: 'start'}}>        
        {JSON.stringify(user, null,2)}{' '}
      </pre>
      )}

    </div>
  )



}

export default App;