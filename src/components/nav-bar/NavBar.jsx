import React from 'react'
import styles from './NavBar.module.css'
import Price from '../price/Price'

const NavBar = ({price, time}) => {
  return (
    <div className={styles.navBar}>
      <Price price={price} time={time} />
    </div>
  )
}

export default NavBar