import React from 'react'
import styles from './Price.module.css'

const Price = ({price, time}) => {
  return (
    <div className={styles.price} >
      <h3>EUR/USD</h3>
      <h2>{price}</h2>
      <h3>{time}</h3>
    </div>
  )
}

export default Price