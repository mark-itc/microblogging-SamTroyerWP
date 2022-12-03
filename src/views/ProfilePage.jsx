import React, {useContext} from 'react'
import { ProfileContext } from '../contexts/ProfileContext';
import './ProfilePage.css'

function ProfilePage() {

  
  const {userName, setUserName, text, setText} = useContext(ProfileContext);
  
    
  function saveUserName() {
      localStorage.setItem("userName", JSON.stringify(userName));
      setUserName('')
      setText('')
  }

  function handleUserName(e) {
   setUserName(e.target.value)
   
  }


  function SaveButton (props) {
    const {disabled, onChange} = props
    return (
    <button 
    disabled={disabled}
    onClick={saveUserName} 
    onChange={onChange} 
    className='save-button'
    >Save
    </button>)
  }

  return (
    <div className='profile-page'>
      <h2>Profile</h2>
      <div>User Name</div>
      <form className='compose-form' 
      onSubmit={saveUserName}
      >
      <input className='user-input' type='text' onChange={handleUserName} placeholder='Enter User Name'></input>
      </form>
      <SaveButton/>
    </div>
  )
}

export default ProfilePage
