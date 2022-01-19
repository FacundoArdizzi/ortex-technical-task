import React from 'react'
import styles from './InputName.module.css'

const InputName = ({ handler }) => {
  return (
    <div>
      <input 
        className={styles.inpName}
        onChange={handler}
        type='text' 
        name='userName'
        placeholder='User name'
        autoComplete='off'
      />
    </div>
  )
}

export default InputName