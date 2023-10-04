import React from 'react'
import { styled } from 'styled-components'

const Content = () => {
    return (
        <Container>
        
            <div className="Leftpart">
                <div className="elite-bridge-text">
                    <div className="line-4"></div>

                    <div className="elite-bridge-business-solutions-india-llp">
                        EliteBridge Business Solutions India LLP
                    </div>

                    <div className="line-5"></div>

                    <div className="paragraph">
                        The platform for connecting customers and suppliers for a seamless and
                        efficient procurement process by seasoned professionals. We are
                        providing solutions in Industrial equipment and services along with
                        industrial vending machines, Tool Management system. We are also
                        involved in Product lifecycle management and industrial automation
                        works. We are expert in CAD, CAM &amp; CAE services.
                    </div>
                    <div className="qualitybtn">
                        <div className="quality q1"></div>
                        <div className="quality q2"></div>
                    </div>
                </div>
            </div>
            <div className="RightPart">
                <img src="\images\Side Images.png" alt="" />
            </div>
            
        </Container>
    )
}

export default Content

const Container = styled.div`
display: flex;
justify-content: space-around;
//align-items: center;
padding: 0px 60px;
padding-top: 50px;
height: 600px;

  .elite-bridge-text {
  width: 627px;
  height: 324px;
  position: static;
  //justify-content: center;
  padding-left: 20px;
}
.line-4 {
  border-style: solid;
  border-color: #f58e49;
  border-width: 2px 0 0 0;
  width: 43px;
  height: 0px;
  /* position: absolute;
  left: 137px;
  top: 862px; */
}
.line-5 {
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.9);
  border-width: 0.5px 0 0 0;
  width: 390.01px;
  height: 0px;
  /* position: absolute;
  left: 168px;
  top: 916px; */
  transform-origin: 0 0;
  transform: rotate(-0.294deg) scale(1, 1);
  filter: blur(2px);
}
.paragraph {
  color: rgba(0, 0, 0, 0.7);
  text-align: justified;
  font: 700 20px/38px "Source Sans Pro", sans-serif;
  /* position: absolute;
  left: 137px;
  top: 952px; */
  width: 627px;
  display: flex;
  align-items: center;
  justify-content: undefined;
  padding-top: 30px;
}
.elite-bridge-business-solutions-india-llp {
  color: #000000;
  text-align: left;
  font: 700 26px/54px "Source Sans Pro", sans-serif;
  /* position: absolute;
  left: 137px;
  top: 856px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.qualitybtn{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

}
.quality{
    width: 280px;
    height: 70px;
    background: rgba(245, 142, 73, 0.63);
    border-radius: 16px;
}

.RightPart img{

  //margin-left: 25px;

}


@media screen and (min-width:280px) and (max-width:414px){
    overflow-x: hidden;
    display:block;
    padding: 0px 10px;
    text-align:justify;
   height:530px;
    //justify-content: center;

    .line-5 {
  display: none;
}
.line-4{
  display: none;
  
}
.elite-bridge-text {
  padding: 0px;
  padding-top:0;
  padding-left:0px;
}

.paragraph {
  font: 700 14px/22px "Source Sans Pro", sans-serif;
 padding-top:20px;
  /* position: absolute;
  left: 137px;
  top: 952px; */
  width: 55%;
  padding:30px;
}

.qualitybtn{
    display: block;
    justify-content: center;
    margin-left: 20px;

}
.quality{
    width: 280px;
    height: 55px;
    background: rgba(245, 142, 73, 0.63);
    border-radius: 16px;
    margin-top: 12px;
}

.RightPart img{
    display:none;

}
.elite-bridge-business-solutions-india-llp {

  font: 700 14px/30px "Source Sans Pro", sans-serif;
  margin-bottom:0px;
  /* position: absolute;
  left: 137px;
  top: 856px; */
  padding-left:30px;
}

}
@media screen and (width : 540px)
{
  overflow-x: hidden;
  display:block;
  padding: 0px 10px;
  text-align:justify;
  height: 750px;
  //justify-content: center;

  .line-5 {
display: none;
}
.line-4{
display: none;

}
.elite-bridge-text {
padding: 0px;
padding-top:0;
padding-left:0px;
}

.paragraph {
font: 700 14px/22px "Source Sans Pro", sans-serif;
padding-top:20px;
/* position: absolute;
left: 137px;
top: 952px; */
width: 80%;
padding:30px;
}

.qualitybtn{
  display: flex;
  justify-content:left;
}



.RightPart img{
  display:none;

}
.q1
{
  width: 200px;
  height: 55px;
 background: rgba(245, 142, 73, 0.63);
  border-radius: 16px;
   margin-top: 12px;
   margin-left:25px;
}
.q2
{
  margin-left:55px;
  width: 200px;
  height: 55px;
 background: rgba(245, 142, 73, 0.63);
  border-radius: 16px;
   margin-top: 12px;
 
}
.elite-bridge-business-solutions-india-llp {

font: 700 14px/30px "Source Sans Pro", sans-serif;
margin-bottom:0px;
/* position: absolute;
left: 137px;
top: 856px; */
padding-left:30px;
}
}
@media screen and (min-width : 710px) and (max-width : 768px){
  display: flex;
  justify-content: space-around;
  //align-items: center;
  padding: 0px 20px;

 height:400px;
overflow:hidden;
      .elite-bridge-text {
    width: 100%;
    height: 324px;
    position: static;
    //justify-content: center;
    padding: 15px;
  }
  .line-4 {
    display: none;
  }
  .line-5 {
    display: none;
  }
  .paragraph {
    color: rgba(0, 0, 0, 0.7);
    text-align: justified;
    font: 600 16px/38px "Source Sans Pro", sans-serif;
    /* position: absolute;
    left: 137px;
    top: 952px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: undefined;
    padding-top: 30px;
  }
  .elite-bridge-business-solutions-india-llp {
    color: #000000;
    text-align: left;
    font: 700 23px/54px "Source Sans Pro", sans-serif;
    /* position: absolute;
    left: 137px;
    top: 856px; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .qualitybtn{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
  
  }
  .quality{
      width: 200px;
      height: 60px;
      background: rgba(245, 142, 73, 0.63);
      border-radius: 16px;
  }
  
  .RightPart img{
  
    display:none;
  }
  
  
  

}

@media screen and (min-width:820px) and (max-width:912px) {
  display: flex;
justify-content: space-around;
//align-items: center;
padding: 0px 20px;


    .elite-bridge-text {
  width: 527px;
  height: 324px;
  position: static;
  //justify-content: center;
  padding-left: 65px;
}
.line-4 {
  display: none;
}
.line-5 {
  display: none;
}
.paragraph {
  color: rgba(0, 0, 0, 0.7);
  text-align: justified;
  font: 700 16px/38px "Source Sans Pro", sans-serif;
  /* position: absolute;
  left: 137px;
  top: 952px; */
  width: 427px;
  display: flex;
  align-items: center;
  justify-content: undefined;
  padding-top: 30px;
}
.elite-bridge-business-solutions-india-llp {
  color: #000000;
  text-align: left;
  font: 700 23px/54px "Source Sans Pro", sans-serif;
  /* position: absolute;
  left: 137px;
  top: 856px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.qualitybtn{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

}
.quality{
    width: 200px;
    height: 60px;
    background: rgba(245, 142, 73, 0.63);
    border-radius: 16px;
}

.RightPart img{

  padding-right: 45px;
  margin-top: 50px;
  width: 370px;

}
}

@media screen and (min-width:1010px) and (max-width:1024px)
{
  
  .elite-bridge-text {
    position: static;
    //justify-content: center;
    padding-left: 60px;
  }
  .paragraph
  {
    width:90%;
  }
  .RightPart img{

    padding-right: 45px;
    margin-top: 90px;
    width: 340px;
  
  }
}


}
`
