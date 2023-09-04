import React from 'react'
import styles from './notFound.module.css'
function NotFound({message}) {
  return (
    <div className={styles.notfound}>
      {message}
    </div>
  )
}

export default NotFound
