import React, { useEffect, useState } from 'react'
import styles from './MainRecomm.module.scss'
import ITEM_CARD_DATA from '../../data/wishList.json'
import left from '../img/back.png'
import right from '../img/next.png'
import axios from 'axios'
import sitelist from '../../data/sitelist.json'

const SubRecomm = () => {
  
  const [items,setItems] = useState([]);
  const [move, setMove] = useState(0);
  
  const IMG_WIDTH = 300;
  const moveRight = () => {
    if (move >= -(items.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove(move => move - IMG_WIDTH);
    }
  };

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove(move => move + IMG_WIDTH);
    }
  };


  return (
    <div className={styles.slider}>
      <img
        src={left}
        className={styles.leftArrow}
        onClick={moveLeft}
        alt="화살표 아이콘"
      />
      <img
        src={right}
        className={styles.rightArrow}
        onClick={moveRight}
        alt="화살표 아이콘"
      />
    <div className={styles.carouselWrapper}>
        <div className={styles.recommendTitleBox}>
          <h1>Recommendation</h1>
          <p>캠핑 비버가 추천하는 캠핑장을 만나보세요</p>
        </div>
      <div
        className={styles.carousel}
        style={{ transform: `translateX(${move}px)` }}
      >
        {sitelist.campsite.map(({site_seq,site_name,imgsrcthird}) => {
      return (
        <RecommItem
          key={site_seq}
          name={site_name}
          img={imgsrcthird}
        />
      );
    })}
      </div>
    </div>
  </div>
);  
    

}
const RecommItem = ({name, img}) => {
  return(
    <div className={styles.imgBox}>
      <img src={img} alt="제품 사진"/>
      <div className={styles.text}>
        <p className={styles.recommendItemName}>{name}</p>
      </div>
    </div>
  )
}


export default SubRecomm