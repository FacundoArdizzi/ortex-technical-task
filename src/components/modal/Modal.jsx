import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({ open, onClose }) => {
  return ReactDOM.createPortal(
    <>
      {open && (
        <div>
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={onClose}><AiOutlineCloseCircle /></button>
            <h3>Reset your password</h3>
            <p>Enter your email address to get reset instructions sent to you.</p>
            <input type='text' />
            <button className={styles.submitBtn}>Submit</button>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  )
}

export default Modal