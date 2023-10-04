import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    // Visite the react slick for refrence  
    let setting = {
        //dots : true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToSchroll: 1,
        autoplay: true,
        //height : 700
    }
    const [text, setText] = useState("");
    const [fullText, setFullText] = useState(
        "EliteBridge"
    );
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText((prevText) => prevText + fullText[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 800);
        }
    }, [index]);


    return (

        <Container>
            <TextContent>
                <Heading>
                    <p>Welcome to </p>
                    <span></span>
                    {/* <h2 className="fade-in-text">{text}</h2> */}
                </Heading>
                <Bullet>
                    <div></div>
                    <span>Seamless procurement process for connecting customers and suppliers</span>
                </Bullet>
                <Bullet1>
                    <div></div>
                    <span>Industrial equipment & services</span>
                </Bullet1>
                <Bullet2>
                    <div></div>
                    <span>Expertise in CAD, CAM & CAE services</span>
                </Bullet2>
                <Bullet3>
                    <div></div>
                    <span>Experienced professionals delivering efficient solutions</span>
                </Bullet3>

                <Button>
                    <a href="/about">
                        <div className="overlap-group">
                            <h1 className="text-wrapper">Discover More</h1>
                        </div>
                    </a>
                </Button>

            </TextContent>
            <Carousel {...setting}>

                <Wrap>
                    {/* <video src ="videos/33b277f6-db0b-45ee-8bc7-9be0de581f5b.mp4"/> */}
                    <img src="\images\lenny-kuhne-jHZ70nRk7Ns-unsplash1.jpg" alt='Image' />

                </Wrap>
                <Wrap>
                    <img src="\images\Industrial-Manufacturing-Services-Header-1200x900-Machine1.jpg" alt='Image' />
                </Wrap>
                <Wrap>
                    <img src="\images\aeropace.jpg" alt='Image' />
                </Wrap>
                <Wrap>
                    <img src="\images\Automotive & Manufacturing.jpg" alt='Image' />
                </Wrap>
            </Carousel>

        </Container>
    )
}

export default ImgSlider

const Container = styled.div`
@media screen and (max-width:768px){
  height:420px;
 }
 
@media screen and (min-width:280px) and (max-width:414px){
    height:250px;
}


@media screen and (min-width:820px) and (max-width:912px) {
    height:550px;
}
`
const TextContent = styled.div`

    
@media screen and (max-width:768px){
    justify-content: center;
    padding-left: 30px;
}

`
const Heading = styled.div`

    position: absolute;
    z-index: 1;
    color: white;
    font-size: 64px;
    font-family: sans-serif;
    display: flex;
    //justify-content: flex-start;
    padding-left: 118px;
    font-family: "Source Sans Pro-Bold", Helvetica;
    font-weight: 600;
    padding-top: 60px;

    span{
        &:before {
        content: "EliteBridge";
        position: absolute;
        //padding-left:480px ;
        top:60;
        left:490px;
        width: 0;
        height: 100%;
        color: white;
        -webkit-text-stroke: 0vw white;
        /* border-right: 2px solid #01fe87 ; */
        overflow: hidden;
        animation: animate 4s linear infinite;
    }
     @keyframes animate {
        0%{
            width: 0;
        }
        100%{
            width:100%;
        }
     } 
    }

    @media screen and (max-width:768px){
        font-size: 250%;
        //padding-left: 68px;
        justify-content: center;
        padding-left: 50px;


        span{
            &:before {

        //left:245px;
        left: 103%;
    }

        }
    }

    @media screen and (min-width:250px) and (max-width:420px) 
{
    font-size: 190%;
        //padding-left: 68px;
        justify-content: center;
        padding-left: 0px;
        padding-top: 40px;
        font-size: 28px;

        span{
            &:before {

        //left:245px;
        left: 103%;
    }

        }
}



@media screen and (min-width:820px) and (max-width:912px) {
    font-size: 190%;
    //padding-left: 68px;
    justify-content: center;
   
    padding-top: 40px;
    font-size: 50px;

    span{
        &:before {

    //left:245px;
    left: 103%;
}

    }
}
`
const Bullet = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    top: 320px;
    align-items: center;
    margin-left:130px;

    div{
        width: 20px;
        height: 20px;
        background-color:#F58E49;
        border-radius: 50%;
        
    }

    span{
        color: #F7FBFF;
        font-size: 24px;
        font-family: "Source Sans Pro-Bold", Helvetica;
        padding-left: 20px;
        font-weight: 600;
        letter-spacing: 1.05px;
    }
    @media screen and (max-width:768px){
   display: none;
    }

    

@media screen and (min-width:820px) and (max-width:912px) {
    top: 230px;
}
`
const Bullet1 = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    top: 380px;
    align-items: center;
    margin-left:130px;

    div{
        width: 20px;
        height: 20px;
        background-color:#F58E49;
        border-radius: 50%;
        
    }

    span{
        color: #F7FBFF;
        font-size: 24px;
        font-family: "Source Sans Pro-Bold", Helvetica;
        padding-left: 20px;
        font-weight: 600;
        letter-spacing: 1.05px;
    }
    @media screen and (max-width:768px){
   display: none;
    }


    @media screen and (min-width:820px) and (max-width:912px) {
        top: 320px;
    }
    
`
const Bullet2 = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    top: 440px;
    align-items: center;
    margin-left:130px;

    div{
        width: 20px;
        height: 20px;
        background-color:#F58E49;
        border-radius: 50%;
        
    }

    span{
        color: #F7FBFF;
        font-size: 24px;
        font-family: "Source Sans Pro-Bold", Helvetica;
        padding-left: 20px;
        font-weight: 600;
        letter-spacing: 1.05px;
    }
    @media screen and (max-width:768px){
   display: none;
    }
    
@media screen and (min-width:820px) and (max-width:912px) {
    top: 380px;
}
`
const Bullet3 = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    top: 500px;
    align-items: center;
    margin-left:130px;

    div{
        width: 20px;
        height: 20px;
        background-color:#F58E49;
        border-radius: 50%;
        
    }

    span{
        color: #F7FBFF;
        font-size: 24px;
        font-family: "Source Sans Pro-Bold", Helvetica;
        padding-left: 20px;
        font-weight: 600;
        letter-spacing: 1.05px;
    }
    @media screen and (max-width:768px){
   display: none;
    }
    
@media screen and (min-width:820px) and (max-width:912px) {
    top: 440px;
}
`

const Button = styled.div`

    position: absolute;
    top:595px;
    z-index: 1;
    margin-left: 120px;
    cursor: pointer;
    
    a{
        text-decoration: none;
    }

    .overlap-group {
  background-color: #f58e49;
  border-radius: 30px;
  height: 62px;
  position: relative;
  width: 197px;
}

.text-wrapper {
  color: #f7fbff;
  font-family: "Source Sans Pro-Bold", Helvetica;
  font-size: 22px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: normal;
  //position: absolute;
  //top: px;
 // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
}

@media screen and (max-width:768px){
   
    top:325px;
    margin-left: 45px;
    .overlap-group {
  height: 42px;
  width: 140px;
}
.text-wrapper {
  font-size: 15px;
  justify-content: center;
  align-items:center ;
  //padding-bottom: 12px;
  padding-top: 12px;
}
   
}


@media screen and (min-width:250px) and (max-width:420px) 
{
    top:235px;
   margin-left: 1px;
   .overlap-group {
 height: 32px;
 width: 107px;
}
.text-wrapper {
 font-size: 12px;
 justify-content: center;
 align-items:center ;
 //padding-bottom: 12px;
 padding-top: 10px;
}
}

@media screen and (min-width:820px) and (max-width:912px) {
    top: 520px;
}
`
const Carousel = styled(Slider)`

    //margin-top: 20px;
    overflow-x: hidden;
   // overflow-y: hidden;
    min-height:650px;
    overflow-y: visible;
    z-index: -1;
   // position: fixed;

   @media screen and (min-width:250px) and (max-width:420px) 
{
    min-height:250px;
}

   

    ul li button{
        &before{
           font-size: 10px;
           color: white;
        }
    }
    //inbult in react slick go to that white dot and inscept u see they created 3 buttons
    li.slick-active button::before{
        color:white;
    }
    .slick-list{
        overflow:visible;
        @media screen and (max-widht:768px){
            max-height:300px;
   } 
    }

    button{
        z-index: 1; //-1 means at last layer & 1 means At TOp
    }
`
const Wrap = styled.div`
    cursor: pointer;
  

    img{
        border: none;
        max-height:700px;
        width : 100%;
        height: 100%;
        /* border-radius: 10px; */
        //box-shadow:  0 26px 30px -10px black;
        //rgb(0 0 0 / 69%) 0px 26px 30px -10px rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 400ms;
        filter: brightness(35%);
       // overflow-y: hidden;
}

@media screen and (max-widht:768px){
    height:100px;
   }
@media screen and (min-width:250px) and (max-width:420px) 
{
}



/* @media screen and (min-width:405px) and (max-width:460px) 
{

}


@media screen and (min-width:405px) and (max-width:460px) 
{

} */



@media screen and (min-width:570px) and (max-width:768px){

}


@media screen and (min-width:800px) and (max-width:912px){
img
{
    height:520px;
}
}



@media screen and (min-width:1010px) and (max-width:1024px)
{

}

`