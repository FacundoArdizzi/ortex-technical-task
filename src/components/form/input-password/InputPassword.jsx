import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import styles from './InputPassword.module.css'

const InputPassword = ({ handler }) => {
  const [focus, setFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const handleEye = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <div 
      className={!focus ? styles.inpPassword : styles.inpPasswordFocus} 
      onClick={() => setFocus(true)}
    >
      <input 
        onChange={handler}
        type={showPassword ? 'text' : 'password'} 
        placeholder='Password' 
        name='password' 
      />
      <button onClick={handleEye}>
        {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
      </button>
    </div>
  )
}

export default InputPassword