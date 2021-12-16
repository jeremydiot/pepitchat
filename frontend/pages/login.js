
import { useState } from 'react'

export default function Login () {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:1337/auth/local', {
        method: 'POST',
        body: {
          identifier: mail,
          password: password
        }
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (

    <div className='modal'>
      <div style={{ height: 'fit-content', width: 'fit-content', margin: 'auto', padding: '3rem', backgroundColor: 'white', marginTop: '6rem', borderRadius: '0.5rem', border: 'solid 0.1rem' }}>
        <h2>Se Connecter</h2>
        <form class='form'>
          <input type='text' placeholder='Email' class='form-input' onChange={mail => setMail(mail)} />
          <input type='password' placeholder='Password' class='form-input' onChange={password => setPassword(password)} />
          <button type='submit' class='form-btn' onClick={handleSubmit}>Se Connecter</button>
        </form>
        <span class='footer'>Vous n'êtes pas encore inscrit ? <a href='/signin' class='footer-nav'>S'inscrire</a></span>
      </div>
    </div>

  )
}
