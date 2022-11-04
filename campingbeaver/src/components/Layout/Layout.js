import React, { useState } from 'react'
import styles from './Layout.module.scss'
import Survey from './Survey'
import {Route, Routes, Link} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { MdTranslate } from 'react-icons/md';
import SurveySecond from './SurveySecond';
import SurveyThird from './SurveyThird';


const Layout = () => {
  
 

  return (
    <div className={styles.wrap}>
          <Survey/>
    </div>
  )
}

export default Layout



// import React, { useContext } from 'react'
// import Footer from './Footer'
// import Header from './Header'
// import styles from './Layout.module.scss'
// import Content from './Content'
// import Survey from './Survey'
// import {Route, Routes, Link} from 'react-router-dom'
// import campsite from '../img/campsite.gif'
// import { Carousel } from "react-bootstrap";
// import campfire from '../img/campfire.gif'
// import tentcamping from '../img/tentcamping.jpg'
// import styled from "styled-components"
// import Middle from "./Middle"
// import Side from "./Side"
// import SurveyContent from './SurveyContent'

// const MainDiv = styled.div`
//   margin: 3rem 5rem;
// `

// const ContentDiv = styled.div`
//   width: 100%;
//   display: flex;
// `

// const Layout = (props) => {
//   return (
//     <div>
//         {/* <Nav/> */}
//         <div className={styles.layout}>
//         {/* <Carousel fade>
//     <Carousel.Item>
//       <img
//         style={{}}
//         className="d-block w-100"
//         src={tentcamping}
//         alt="First slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         style={{}}
//         className="d-block w-100"
//         src={campfire}
//         alt="First slide"
//       />
//     </Carousel.Item>
//   </Carousel> */}
//   <MainDiv>
//     <ContentDiv>
//   <Side/>
//   <SurveyContent/>
//   </ContentDiv>
//   </MainDiv>
//   </div>
//         {/* <Routes>
//           <Route path='/' element={<Survey/>}/>
//         </Routes> */}
//         <main className={styles.main}>
//             {props.children}
//         </main>
//         <h1 align='center'>Our Recommendation</h1>
//         <Content/>
//         <Footer/>
//     </div>
//   )
// }

// export default Layout