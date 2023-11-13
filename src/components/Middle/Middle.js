import React from 'react'
import { styled } from 'styled-components'
const Middle = () => {
  return (
    <Container>
      <div className="container1">
        <img src="\images\ant-rozetsky-SLIFI67jv5k-unsplash.jpg" alt="" />
        <div className="heading1">Providing Solutions For Industries</div>
        <div className="wrap1">
          <div className="automation">
             <h3 className='industry_auto'>Automation</h3>
            <img src='\images\Automation.png' alt='Automation'></img>
          </div>
          <div className="inventory1">
          <h3 className='industry_inven'>Inventory</h3>
            <img src='\images\Inventory.png' alt='Inventory'></img>
          </div>
          <div className="consumable">
          <h3 className='industry_cons'>Consumable</h3>
            <img src='\images\Consumable.png' alt='Consumable'></img>
          </div>

        </div>
      </div>
      
      <div className="container2">
        <div className="wrapper">
          <div className="img">
            <img src="\images\whychooss.jpg" alt="why choose us" />
          </div>
          <div className="frame-2">
            <div className="we-are-open-for-opportunities">
            Free Online Demo- Industrial vending Machine
            </div>

            <div className="appointment">
              <div className="make-an-appointment"> <a href="https://forms.gle/NRqkvnGPMyqCCS1u6" className='request'>Request Free Demo</a></div>
            </div>
          </div>
        </div>
        <div className="wrapper1">
          <div className="whychoose">Why Choose Us?</div>
          <div className="section">
            <div className="contentsection">
              <p>Industry Expertise</p>
              <span>Benefit from our years of experience and deep knowledge in industrial equipment, services, and procurement.</span>
            </div>
            <div className="contentsection">
              <p>Seamless Procurement</p>
              <span>Our platform connects customers and suppliers, streamlining the procurement process for your convenience.</span>
            </div>
            <div className="contentsection">
              <p>Comprehensive Solutions</p><br/>
              <span>Find everything you need under one roof, from industrial equipment to tool management systems.</span>
            </div>
            <div className="contentsection">
              <p>CAD, CAM & CAE Service</p><br/>
              <span>Our experts provide top-notch services in computer-aided design, manufacturing, and engineering.</span>
            </div>
            <div className="contentsection">
              <p>Customer Satisfaction</p>
              <span>We prioritize your satisfaction and build long-term relationships through exceptional service and support.</span>
            </div>
            <div className="contentsection">
              <p>Quality and Efficiency</p>
              <span>Trust our commitment to delivering high-quality products and services with a focus on efficiency.</span>
            </div>
          </div>




        </div>
      </div>
    </Container>
  )
}

export default Middle

const Container = styled.div`

    
.container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 600px;
    ////max-width: 1440px;
    /* padding: 40px; */
  }
.container1 img{
    object-fit:cover;
    height: 600px;
    width: 100%;
    /* filter: brightness(50%); */
    opacity: 35%;
    z-index: -1;
    position: absolute;
}
.request
{
text-decoration:none;
color:white;
}
.heading1{
    font-family: "Source Sans Pro-SemiBold", Helvetica;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
    padding-top: 40px;
    //font-family: "Source Sans Pro-Bold", Helvetica;
    font-weight: 700;
}

.wrap1{
    //justify-content: space-around;
   // overflow-x: hidden;
   padding-top: 10px;
   padding-right:130px;
    width: 100%;
    justify-content: space-around;
    display: flex;
  
}

.automation img{
    //display: flex;
width: 249px;
height: 387px;


flex-shrink: 0;
opacity: 1;
border-radius: 16px;
}
.inventory1 img{
        //display: flex;
        width: 249px;
height: 387px;
//flex-direction: column;
//justify-content: center;
align-items: center;
flex-shrink: 0;
opacity: 1;
border-radius: 16px;
z-index: 1;
}

.consumable img{
    //display: flex;
    width: 249px;
height: 387px;
//flex-direction: column;
//justify-content: center;
align-items: center;
flex-shrink: 0;
opacity: 1;
margin-left:22px;
border-radius: 16px;
}
.industry_auto{
  margin-left:50px;
  font-weight: 600;
 
  }
  .industry_inven{
    margin-left:60px;
    font-weight: 600;
    }
    .industry_cons{
      margin-left:50px;
      font-weight: 600;
      //text-align: center;
      
      }
.container2{
    //width: 500px;
    height: 620px;
    display: flex;
    padding-top: 48px;
    justify-content: space-between;

}
.wrapper{
    //align-items: center;

}
.img img{
    display: flex;
    align-items: center;
    padding-left: 28px;
    width: 630px;
    height: 460px;
    border-right: 90px;
    //align-items: center;
    margin-top: 20px;
  margin-right:50px;
}
.frame-2 {
  background: #265182;
  border-radius: 36px 0px 0px 36px;
  width: 257px;
  height: 155px;
  position: relative;
  overflow: hidden;
  top: 50%;
  //bottom : 1px;
  position:fixed;
  right: 0;
  //left:80%;
  z-index: 1;
  //align-items: center;
}
.we-are-open-for-opportunities {
  color: #f7fbff;
  text-align: left;
  font: 700 17.72px "Inter", sans-serif;
  display: flex;
  //justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 36px;
}
.appointment {
  background: #e7ab82;
  border-radius: 20px;
  width: 180px;
  height: 36px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 36px;
 
}
.make-an-appointment {
  color: #f7fbff;
  text-align: left;
  font: 700 14px "Source Sans Pro", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

}
.wrapper1{
    /* display: grid;
   grid-gap: 25px;
   gap: 40px;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   background-color: #265182; */
   box-sizing: border-box;
   padding-right: 130px;
   //align-items: center;
   //display: flex;
   //justify-content: center;

}
.section{
    display: grid;
   grid-gap: 25px;
   gap: 40px;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   //padding-left: 30px;
}
.contentsection{
    //display: flex;
    p{
        color: #000000;
  text-align: left;
  font: 700 18.72px "Source Sans Pro", sans-serif;
  position: relative;
  //width: 202px;
  height: 23px;
    }
    span{
        display: flex;
        color: #000000;
  text-align: left;
  font: 400 18.72px "Source Sans Pro", sans-serif;
  position: relative;
  width: 252px;
    }
}
.whychoose{
    color: #f58e49;
  text-align: left;
  font: 700 26px "Source Sans Pro", sans-serif;
  position: relative;
  width: 331px;
  height: 42px;
}
@media screen and (min-width:250px) and (max-width:409px) 
{
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;
    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 300px;
    width:390px;
    ////max-width: 1440px;
    /* padding: 40px; */
  }

    .container1 img{
    height: 300px;
    //width:390px;
}

    .heading1{
 margin-bottom:0px;
 text-align:center;
    font-size: 18px;
}

.wrap1{
   padding: 30px;
    width: 270px;
    margin-right: 20px;
    padding-left:140px;
    //justify-content: space-between;
}

.automation img{
width: 90px;
height: 147px;
opacity: 1;
border-radius: 16px;
margin-left:0px;
}
.inventory1 img{
width: 90px;
height: 147px;
margin-left: 10px;

}

.consumable img{
    //display: flex;
width: 90px;
height: 147px;
margin-left: 20px;

}

.industry_auto{
  font-size:16px;
  margin-left:10px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:16px;
    margin-left:20px;
    margin-right:14px;
    }
    .industry_cons{
      font-size:16px;
      margin-left:16px;
     }
    
.container2{
    height: 100%;
    justify-content: center;
    display: block;

}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(2, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
}
}


@media screen and (min-width:410px) and (max-width:460px) 
{
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;
    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 400px;
    width:380px;
    ////max-width: 1440px;
    /* padding: 40px; */

  }

    .container1 img{
    height: 350px;
    //width:390px;
}

    .heading1{
 margin-bottom:0px;
 padding:15px;
 padding-top:40px;
    font-size: 22px;
   width:400px;
}

.wrap1{
   //padding: 40px;
   padding-top: 10px;
    width: 270px;
    justify-content: space-between;
    padding-right:60px;
}

.automation img{
width: 90px;
height: 147px;
opacity: 1;
border-radius: 16px;
margin-left:10px;
}
.inventory1 img{
width: 90px;
height: 147px;
margin-left: 10px;

}

.industry_auto{
  font-size:16px;
  margin-left:10px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:16px;
    margin-left:20px;
    margin-right:14px;
    }
    .industry_cons{
      font-size:16px;
      margin-left:40px;
      
      }
.consumable img{
    //display: flex;
width: 90px;
height: 147px;
margin-left: 10px;

}

.container2{
    height: 100%;
    justify-content: center;
    display: block;

}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(2, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
}
}


@media screen and (min-width:405px) and (max-width:460px) 
{
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;
    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 300px;
    width:390px;
    ////max-width: 1440px;
    /* padding: 40px; */

  }

    .container1 img{
    height: 330px;
    //width:390px;
}

    .heading1{
 margin-bottom:0px;
 padding:15px;
 padding-top:40px;
    font-size: 22px;
   width:400px;
}

.wrap1{
   padding: 20px;
    width: 270px;
    justify-content: space-between;
}

.automation img{
width: 90px;
height: 147px;
opacity: 1;
border-radius: 16px;
margin-left:10px;
}
.inventory1 img{
width: 90px;
height: 147px;
margin-left: 30px;

}

.consumable img{
    //display: flex;
width: 90px;
height: 147px;
margin-left: 40px;

}

.industry_auto{
  font-size:18px;
  margin-left:10px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:18px;
    margin-left:28px;
    
    }
    .industry_cons{
      font-size:18px;
      margin-left:30px;
      
      }
.container2{
    height: 100%;
    justify-content: center;
    display: block;

}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(2, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
}
}
@media screen and (min-width:470px) and (max-width:540px)
{
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;

    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 400px;
    width:390px;
    ////max-width: 1440px;
    /* padding: 40px; */

  }

    .container1 img{
    height: 400px;
    //width:390px;
}

    .heading1{
 margin-bottom:30px;
margin-left:55px;
 padding-top:40px;
    font-size: 26px;
   width:500px;
}

.wrap1{
   padding: 40px;
    width: 270px;
    justify-content: space-between;
}

.automation img{
width: 100px;
height: 167px;
opacity: 1;
border-radius: 16px;
margin-left:30px;
}
.inventory1 img{
    width: 100px;
    height: 167px;
margin-left: 70px;

}

.consumable img{
    //display: flex;
    width: 100px;
    height: 167px;
margin-left: 90px;

}
.industry_auto{
  font-size:18px;
  margin-left:26px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:18px;
    margin-left:72px;
    
    }
    .industry_cons{
      font-size:18px;
      margin-left:90px;
      
      }

.container2{
    height: 100%;
    justify-content: center;
    display: block;
  width:500px;
}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(2, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
  width:400px;
}
}



@media screen and (min-width:570px) and (max-width:768px){
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;

    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 400px;
    width:390px;
    ////max-width: 1440px;
    /* padding: 40px; */

  }

    .container1 img{
    height: 400px;
    //width:390px;
}

    .heading1{
 margin-bottom:30px;
margin-left:55px;
 padding-top:40px;
    font-size: 26px;
   width:600px;
}

.wrap1{
   padding: 40px;
    width: 270px;
    justify-content: space-between;
}

.automation img{
width: 100px;
height: 167px;
opacity: 1;
border-radius: 16px;
margin-left:80px;
}
.inventory1 img{
    width: 100px;
    height: 167px;
margin-left: 100px;

}

.consumable img{
    //display: flex;
    width: 100px;
    height: 167px;
margin-left: 120px;

}
.industry_auto{
  font-size:24px;
  margin-left:66px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:24px;
    margin-left:92px;
    
    }
    .industry_cons{
      font-size:24px;
      margin-left:110px;
      
      }
.container2{
    height: 450px;
    justify-content: center;
    display: block;
    width:700px;
}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(3, minmax(0, 1fr));
   padding-left:10px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
  width:600px;
}
}


@media screen and (min-width:780px) and (max-width:912px){
  
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;

    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 400px;
    width:780px;
    ////max-width: 1440px;
    /* padding: 40px; */
    overflow:hidden;

  }

    .container1 img{
    height: 400px;
    //width:390px;
}

    .heading1{
 margin-bottom:30px;
text-align:center;
 padding-top:40px;
    font-size: 34px;
   width:900px;
}

.wrap1{
   padding: 40px;
    width: 270px;
    justify-content: space-between;
}

.automation img{
width: 120px;
height: 187px;
opacity: 1;
border-radius: 16px;
margin-left:100px;
}
.inventory1 img{
    width: 120px;
height: 187px;
margin-left: 70px;

}

.consumable img{
    //display: flex;
    width: 120px;
    height: 187px;
margin-left: 110px;

}
.industry_auto{
  font-size:26px;
  margin-left:100px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:26px;
    margin-left:72px;
    
    }
    .industry_cons{
      font-size:26px;
      margin-left:100px;
      
      }
.container2{
    height: 100%;
    justify-content: center;
    display: block;
    width:780px;
}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(3, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
   margin-bottom:20px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
  width:700px;
}
}



@media screen and (min-width:1010px) and (max-width:1024px)
{
    margin: 0;
    padding: 0;//
    //height: 400px;
    width:400px;

    .container1 {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    height: 430px;
    width:390px;
    ////max-width: 1440px;
    /* padding: 40px; */

  }

    .container1 img{
    height: 430px;
    //width:390px;
}

    .heading1{
 margin-bottom:30px;
margin-left:55px;
 padding-top:40px;
    font-size: 34px;
   width:900px;
}

.wrap1{
   padding: 40px;
    width: 270px;
    justify-content: space-between;
}

.automation img{
width: 140px;
height: 207px;
opacity: 1;
border-radius: 16px;
margin-left:80px;
}
.inventory1 img{
    width: 140px;
    height: 207px;
margin-left: 150px;

}

.consumable img{
    //display: flex;
    width: 140px;
    height: 207px;
margin-left: 200px;

}
.industry_auto{
  font-size:28px;
  margin-left:74px;
  margin-right:14px;
  }
  .industry_inven{
    font-size:24px;
    margin-left:160px;
    
    }
    .industry_cons{
      font-size:24px;
      margin-left:200px;
      
      }
.container2{
    height: 100%;
    justify-content: center;
    display: block;
width:900px;
}


.frame-2 {
  display: none;
}
.we-are-open-for-opportunities {
  display: none;
}
.appointment {
 display: none;
}
.make-an-appointment {
  display: none;

}
.wrapper1{

   padding-right: 10px;
   justify-content: center;

}
.img{
    display: none;
}

.section{
   grid-template-columns: repeat(3, minmax(0, 1fr));
   padding: 10px 0;
   padding-left: 20px;
   margin-bottom:30px;
}
.contentsection{
    justify-content: center;
    p{
  font: 700 16px "Source Sans Pro", sans-serif;
  padding-bottom: 10px;
    }
    span{
  width: 142px;
  font: 400 13.72px "Source Sans Pro", sans-serif;
    }
}
.whychoose{
  text-align: center;
  padding-left: 60px;
  width:900px;
}
}

`