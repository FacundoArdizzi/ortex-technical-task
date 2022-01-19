import axios from 'axios'
import React, { useState } from 'react'
import Logo from '../../assets/ortex-logo-v.png'
import styles from './Form.module.css'
import Modal from '../modal/Modal'
import InputPassword from './input-password/InputPassword'
import InputName from './input-name/InputName'

const Form = () => {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState({
    userName: '',
    password: '',
  })
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = () => {
    axios.post('/login', data)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className={styles.form}>
      <img src={Logo} alt='Ortex logo' ></img>
      <form className={styles.inputs}>
        <InputName handler={handleChange} />
        <InputPassword handler={handleChange} />
      </form>
      <p onClick={() => setOpen(true)}>Forgot your password?</p>
      <button className={styles.btn} onClick={handleSubmit}>login</button>
      <Modal open={isOpen} onClose={() => setOpen(false)}/>
    </div>
  )
}

export default Form
