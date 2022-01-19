import React from 'react'
import styles from './Price.module.css'
import Loader from '../loader/Loader'

const Price = ({price, time}) => {

  return ( 
    <>
    {price ? (
      <div className={styles.price}>
        <h3>EUR/USD</h3>
        <h2>{price}</h2>
        <h3>{time}</h3>
      </div>
    ) : <div className={styles.ld}><Loader /></div>}
    </>
  )
}


export default Price