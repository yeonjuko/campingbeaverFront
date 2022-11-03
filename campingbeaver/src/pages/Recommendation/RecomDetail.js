import React, { useEffect, useState } from 'react'
import Map from './Map'
import Axios from 'axios'
import Slider from "react-slick";
import stylesheet from './RecomDetail.css'
import surveyimg from './campimg/surveyimg.jpg'
const RecomDetail = () => {

  const [recommendation, setRecommendation] = useState("")
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [siteName, setSiteName] = useState("");

  useEffect(()=>{
    Axios.get("/beaver/main").then((response)=>{

      setRecommendation(response.data);
      
      
      if(response.data){
        // setRecommendation(response.data);
        // console.log(recommendation);
        
      }else{
        alert("failed");
      }
    })
},[])
console.log(recommendation);
  useEffect(()=>{
    setLatitude(recommendation.site_lat);
    setLongitude(recommendation.site_lng);
    setSiteName(recommendation.site_name);
  })
    
  // console.log(latitude);
  // console.log(longitude);

  const decimalProps ={
    latitude,
    longitude,
    siteName,
  }



  return (
    <div>
              <Map {...decimalProps}/>


              
<div class="con list-1">
	<div class="title">
		<div class="main-title">MAGAZINE</div>
		<div class="sub-title">매주 한번 스테이폴리오가 이야기하는 유니크한 공간!</div>
		<div class="read-more">read more magazine</div>
	</div>
	<div class="row">
		<div class="cell">
			<div class="img-box">
				<div class="date">
					18 /<span> 06W1</span>	
				</div>
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">낙원장</h1>
                        <div class="sub-name">부티끄호텔</div>
                        <div class="location">서울/종로</div>
                    </div>
                    
                    <div class="body">
                        <div class="des_title">
                            전통에 품격을 더한 고택의 재해석
                        </div>
                        <div class="des">
                            안동 구름에 리조트는 전통 고택 리조트라는 새로운 개념의 스테이다. 고택과 리조트라는 상반된 단어는 전통과 현대를 적절하게 공존시키고자 하는 안동 구름에 리조트의 목표를 잘 보여주고 있다. ‘한국 정신문화의 수도’로 칭해지는 안동에서 고택의 가치와 장점은 지키고 불편함은 보완하며 안동 구름에 리조트는 그들만의 중심을 지키며 조용하게 안동에서 자리를 잡으며 운영되고 있다.
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</div>



<div class="con list-1">
	<div class="row">
		<div class="cell">
			<div class="img-box">
				<div class="date">
					18 /<span> 03W3</span>	
				</div>
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">이꼬이&스테이</h1>
                        <div class="sub-name">게스트하우스</div>
                        <div class="location">제주/구제주</div>
                    </div>
                    
                    <div class="body">
                        <div class="des_title">
                            셰프의 식사와 매력적인 스테이가 함께하는 곳
                        </div>
                        <div class="des">
                            쉼, 휴식이라는 뜻처럼 "이꼬이&Stay"는 휴식을 하면서 머무는 곳이다. 게스트하우스와 호텔의 장점을 살린 이꼬이&STAY는 20년 넘은 4층 건물을 대폭 개조하여 식당과 게스트하우스, 주인집이 공존하는 유니크한 스테이이다. 한 끼의 정성스러운 식사만큼이나 세심한 배려가 돋보이는 특별한 디자인이다.
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</div>

<div class="con list-2">
	<div class="title"> 
		<div class="main-title">PICK</div>
		<div class="sub-title">캠핑비버가 추천합니다!</div>
		<div class="read-more">read more pick</div>
	</div>
	<div class="row">
		<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">오월호텔</h1>
                        <div class="sub-name">owall hotel</div>
                        <div class="sub-name2">좋은 계절, 오월의 공간</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/강남구</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>부티끄호텔</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>250,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>URBAN STAY, 도심여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">빌라그레이스</h1>
                        <div class="sub-name">VILLA GREYS</div>
                        <div class="sub-name2">목가적 삶을 지향하는 건축가의 집</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>경상북도/경주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인펜션</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>180,000~320,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>가족여행, 경주여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">호스텔 하루</h1>
                        <div class="sub-name">HOSTEL HARU</div>
                        <div class="sub-name2">하루를 쉬는 곳</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/종로</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인호스텔</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>35,000~220,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>문화, 예술, 서울여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">네이처트레일</h1>
                        <div class="sub-name">Nature trail</div>
                        <div class="sub-name2">싱그러운 자연 속 제주의 낮과 밤</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>제주/제주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인펜션</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>110,000~150,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>태교여행, 힐링, 휴식</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">스테이렌토</h1>
                        <div class="sub-name">STAY LENTO</div>
                        <div class="sub-name2">포구 옆 시골마을의 작은 집</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>제주/제주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>렌탈하우스</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>200,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>사색, 힐링, 휴식</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">지금</h1>
                        <div class="sub-name">zikm</div>
                        <div class="sub-name2">서울성곽길 아래 모던한옥</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/종로</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>한옥스테이</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>250,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>휴식, 가족여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
	</div>
</div>
<div class="con">
	<div class="footer">
		<div class="footer-box">
			<div class="footer-txt">
				<h1>편안한 머무름과 좋은 추억을 만들어 준 스테이가 있다면
스테이폴리오(STAYFOLIO)에 소개해주세요.</h1>
				<span>알려주신 스테이에 대해 스테이폴리오에서는 4가지 관점을 통해 장소의 가치를 탐구하여 소개해드리고자 합니다.
</span>
			</div>
		</div>
	</div>
</div>
		
       </div>
 
    
  )
}

export default RecomDetail