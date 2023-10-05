import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <h1>Auth0-demo</h1>
      {isAuthenticated ? 
      <>
        { isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
        }
      <h1>Hello </h1>
      
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      </>:
      <>
      <h1>Hello Guest</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
    }
      
    </div>
  )
}

export default App
