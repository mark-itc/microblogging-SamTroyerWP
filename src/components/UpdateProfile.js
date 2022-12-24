import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function UpdateProfile() {

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateUsername } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')

    function saveUserName() {
      localStorage.setItem("userName", JSON.stringify(userName));
    }

    function handleUserName(e) {
      setUserName(e.target.value)
     }

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== 
          passwordConfirmRef.current.value) {
              return setError('Passwords do not match')
          }

        const promises = []
        setLoading(true)
        setError('')  

        if (emailRef.current.value !== currentUser.email) {
          promises(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
          promises(updatePassword(passwordRef.current.value))
        }
        if (usernameRef.current.value) {
          promises(updateUsername(usernameRef.current.value))
        }

        Promise.all(promises).then (() => {
          navigate('/')
        }).catch(() => {
          setError('Failed to update account')
        }).finally(() => {
          setLoading(false)
        })
    }

  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Update Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
                </Form.Group>
                <Form.Group id='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' ref={usernameRef} required />
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <Button type='submit' onClick={saveUserName} onChange={handleUserName} disabled={loading}>Update</Button>
            </Form>
            
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
}

