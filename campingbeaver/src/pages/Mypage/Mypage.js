import React from 'react'
import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';


const MyPage = () => {

  return (
    <div className={styles.top}>
      
      
      <div>
          <h1 className={styles.MyPage}>
          admin님 반가워요!
          </h1>
          <p>admin@gmail.com</p>
      </div>
      <hr/>
          
      {/* <div className={styles.MyInfo}>
          <h5>
            admin님 반가워요!
          </h5>
          <p>admin@gmail.com</p>
      </div> */}
          
      
      
      <SideNav/>
      
    </div>
  )
}

export default MyPage

