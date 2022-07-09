import React from 'react'
import styles from './square.modul.css'


 const Square = (props) => {
    return <button className={styles.square} onClick={props.handlePlay}>{props.value}</button>

}
export default Square