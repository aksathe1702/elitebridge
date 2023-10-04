import React from 'react'
import styled from 'styled-components'
//import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <Container>
      <div className="container">
        <img src="\images\handshake.jpg" alt="" />
        <div className="wrapp">
          <div className="heading"> <p> Get In Touch</p></div>
        </div>
        <div className="wrap">
          <div className="left">
            <p>Better yet, see us in person!</p>
            <span>We love our customers, so feel free to visit during normal business hours.</span>
            <div className="button">
              <img src="" alt="" />
              <p>Messages us on Whatapp</p>
            </div>
            <div className="callemail">
              <p>EliteBridge Business Solutions India LLP</p>
              <div className="call">
                <img src="\images\TelephoneFill.svg" alt="" />
                <p>Call : +91 7774848175</p>
              </div>
              <div className="call">
                <img src="\images\email.svg" alt="" />
                <p> Email : sales@elitebridge.in</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="\images\getintouch.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GetInTouch

const Container = styled.div`
    /* .comtainer{
    max-width: 100%;
    width: 100%;
    height: 550px;
}*/
.container img{
    object-fit:cover;
    height: 600px;
    width: 100%;
    /* filter: brightness(50%); */
    opacity: 35%;
    z-index: -1;
    position: absolute;
}
.right img{
    width: 350px;
    height: 350px;
    opacity: 1;
    margin-left: 100px;
    padding-top: 40px;
} 

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 40px; */
  }
  
  /* .container img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  } */
  
  .heading {
    font-size: 30px;
    font-weight: bold;
    //margin-bottom: 50px;
    //padding-top: 40px;
    font-family: "Source Sans Pro-Bold", Helvetica;
    font-weight: 700;

  }
  
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  
  .left {
    flex: 1;
    //margin-left:120px ;
  }
  
  .left p {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: "Source Sans Pro-Bold", Helvetica;
    font-weight: 700;
  }
  
  .left span {
    font-size: 20px;
    color: rgb(72, 71, 71);
    font-family: "Source Sans Pro-Bold", Helvetica;
    font-weight: 500;
    max-width: 200px;

  }
  
  .button {
    display: flex;
    align-items: center;
    margin-top: 75px;
    /* padding: 10px 20px; */
    background-color: #265182;
    width: 261px;
height: 54.309px;
justify-content: center;
border-radius: 16px;
align-items: center;
  }
  
  .button img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  .button p {
    font-size: 16px;
    color: white;
    align-items: center;
    padding-top: 8px;
    
  }
  
  .callemail {
    margin-top: 42px;
  }
  
  .callemail p {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .call {
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  
  .call img {
    width: 25px;
    height: 25px;
    align-items: flex-start;
    opacity: 1;
    /* padding-bottom: 5px; */
  }
  
  .call p {
    font-size: 22px;
    margin-left: 35px;
    align-items: center;
    font-weight: 500;
    
  }
  
  .right {
    flex: 1;
    display: flex;
    //justify-content: flex-end;
    margin-left: 66px;
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
    width: 200.01px;
    height: 0px;
    /* position: absolute;
    left: 168px;
    top: 916px; */
    transform-origin: 0 0;
    /* transform: rotate(-0.294deg) scale(1, 1); */
    filter: blur(2px);
  }
  
  /* .right img {
    width: 100%;
    height: auto;
  } */
  
  /* Media Query for Responsive Design */
  
  @media screen and (min-width:250px) and (max-width:414px) 
   {

    height: 630px;
    
    .container {
      //padding: 20px;
      height: 100%;
      //padding-bottom: 90px;
      //align-items: self-start;


    }
  
    .container img{
    object-fit:cover;
    //height: 600px;
    width: 100%;
    /* filter: brightness(50%); */
    opacity: 35%;
    z-index: -1;
    position: absolute;
}
.heading p{
  font-size: 22px;
  padding-bottom: 38px;
}
  
    
    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      padding-bottom: 34px;
    }
    
    .left {
      flex: 1;
      margin-left:10px ;
    }

    
    .left p {
      font-size: 16px;
      margin-bottom: 10px;
      font-family: "Source Sans Pro-Bold", Helvetica;
      font-weight: 700;
    }
    
    .left span {
      font-size: 15px;
      color: rgb(72, 71, 71);
      font-family: "Source Sans Pro-Bold", Helvetica;
      font-weight: 500;
      max-width: 200px;
  
    }
    
    .button {
      display: flex;
      align-items: center;
      margin-top: 40px;
      /* padding: 10px 20px; */
      background-color: #265182;
      width: 201px;
  height: 44.309px;
  justify-content: center;
  border-radius: 16px;
  align-items: center;
    }
    
    .button img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    
    .button p {
      font-size: 13px;
      color: white;
      align-items: center;
      padding-top: 8px;
      
    }
    
    .callemail {
      margin-top: 42px;
    }
    
    .callemail p {
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: 600;
    }
    
    .call {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    
    .call img {
      width: 20px;
      height: 20apx;
      align-items: flex-start;
      opacity: 1;
      /* padding-bottom: 5px; */
    }
    
    .call p {
      font-size: 16px;
      margin-left: 35px;
      align-items: center;
      font-weight: 500;
      
    }
    
    .right {
      display: none;
    }
  
    .heading {
      font: 700 14px/22px "Source Sans Pro", sans-serif;
      margin-bottom: 0px;
      padding-top: 0px;
    }
  .right img
  {
    display:none;
  }
    }

    @media screen and (min-width:415px) and (max-width:760px)
    {
      .container
      {
        
        text-align:center;
      }
      .heading
      {
        margin-left:0px;
      }
      .wrap
      {
        width:400px;
      }
      .right img
      {
       display:none;
      }
    }

    @media screen and (min-width:768px) and (max-width:912px)
    {
       .right img
       {
        margin-left:0px;
       }
    }
  }
  
`
