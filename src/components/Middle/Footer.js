import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div className='footer'>
        <img
          className="white-bg-logo-with-tagline"
          src="\images\White_BG_LOGO_with tagline.svg"
        />

        <div className="middlesection">
          <div className="footer-link-tab">
            <div className="home"><a href="/productandservices" className='footerlink'>Home</a></div>

            <div className="home"><a href="/productandservices" className='footerlink'>Products & Services</a></div>

            <div className="home"><a href="/industry" className='footerlink'>Industries</a></div>

            <div className="home"><a href="careers" className='footerlink'>Careers</a></div>

            <div className="home"><a href="contactus" className='footerlink'>Contact Us</a></div>
          </div>
          <div className="copyright-2022-elite-bridge-business-solution-india-llp-all-rights-reserved">
            Copyright © 2022 EliteBridge Business Solution India LLP - All Rights
            Reserved
          </div>
        </div>
        <div className="socialmedia">
          <a href="https://youtube.com/@elitebridgeknowledgecentre705"> <img className="youtube" src="\images\youtube.png" /></a>

          <a href="https://www.linkedin.com/company/elitebridge-india/"> <img className="linkedin" src="\images\linkedin.png" /></a>

          <a href="https://instagram.com/elitebridge_india?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><img className="instagram" src="\images\instagram.png" /></a>
        </div>

      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
height: 150px;
padding: 50px 0;



    img{
        margin-top: 10px;
    }
    .footer {
        display: flex;
        margin: 0 120px;
        justify-content: space-around;
        align-items: center;
}
.footerlink
{
 text-decoration:none;
 color:black;
}
.youtube {
  width: 24.98px;
  height: 25.69px;
  margin: 0 8px;

}
.linkedin {
  width: 24.98px;
  height: 25.69px;
  margin: 0 8px;
}
.instagram {
  width: 24.98px;
  height: 25.69px;
  margin: 0 8px;
}
.copyright-2022-elite-bridge-business-solution-india-llp-all-rights-reserved {
  color: #000000;
  text-align: center;
  //font: 500 13px "Source Sans Pro-Bold", Helvetica;
  width: 567.69px;
  //height: 30.41px;
  padding-top: 20px;
  //padding-bottom: 20px;
  font-family: "Source Sans Pro-SemiBold", Helvetica;
  font-size: 16px;
  

}
.footer-link-tab {
  width: 100%px;
  height: 15.41px;
  position: static;
  display: flex;
  justify-content: space-around;
  padding : 0 25px;
}
.home {
  color: #000000;
  text-align: left;
  text-decoration: underline;
 // width: 33.98px;
  height: 19.41px;
  padding: 0 5px;
  font-family: "Source Sans Pro-SemiBold", Helvetica;
  font-size: 16px;
  text-decoration: none;
  //padding: 10px;
}

.white-bg-logo-with-tagline {
  /* width: 160.89px;
  height: 56.51px; */
}

@media screen and (max-width:420px){
  justify-content: center;
  padding-top: 10px;
  width: 100%;
  justify-content: center;
 img{
    //justify-content: center;
    //padding-left: 30px;
    margin-left: 110px;
  }
  .footer {
        display: block;
        margin: 0 10px;
        width: 100%;
        //justify-content: center;
}
.socialmedia{
  margin-left: 100px;
  padding-bottom: 25px;
}
.youtube {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
  //padding: 20px;

}
.linkedin {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
}
.instagram {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
}
.copyright-2022-elite-bridge-business-solution-india-llp-all-rights-reserved {
  
  width: 100%;
  height: 90.41px;
  text-align: center;
  padding: 0 22px;
}
.middlesection{
  justify-content: center;
}
.footer-link-tab {
  width: 96%;
  height: 15.41px;
  position: static;
  display: flex;
  justify-content: space-around;
  padding : 0 1px;
  margin-bottom: 20px;
 // padding-left: 10px;
  //padding-bottom: 20px;
}
.home {
  color: #000000;
  text-align: center;
  font: 400 12px "Inter", sans-serif;
  text-decoration: underline;
 // width: 33.98px;
  height: 19.41px;
  padding: 0 1px;
  //padding: 10px;
}

.white-bg-logo-with-tagline {
  /* width: 160.89px;
  height: 56.51px; */
}
}


@media screen and (min-width:570px) and (max-width:838px){

  justify-content: center;
  padding-top: 60px;
  width: 100%;
 img{
    //justify-content: center;
    //padding-left: 30px;
    margin-left: 80px;
  }
  .footer {
        display: flex;
        margin: 0 10px;
        width: 100%;
        //justify-content: center;
}
.socialmedia{
  margin-left: 70px;
  padding-bottom: 25px;
}
.youtube {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
  //padding: 20px;

}
.linkedin {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
}
.instagram {
  width: 24.98px;
  height: 25.69px;
  margin: 0 15px;
}
.copyright-2022-elite-bridge-business-solution-india-llp-all-rights-reserved {
  
  width: 100%;
  height: 90.41px;
  text-align: center;
  padding: 0 22px;
}
.middlesection{
  justify-content: center;
}
.footer-link-tab {
  width: 100%;
  height: 15.41px;
  position: static;
  display: flex;
  justify-content: space-around;
  padding : 0 1px;
  margin-bottom: 20px;
 // padding-left: 10px;
  //padding-bottom: 20px;
}
.home {
  color: #000000;
  text-align: center;
  font: 400 12px "Inter", sans-serif;
  text-decoration: underline;
 // width: 33.98px;
  height: 19.41px;
  padding: 0 1px;
  //padding: 10px;
}

.white-bg-logo-with-tagline {
  /* width: 160.89px;
  height: 56.51px; */
}
}


`


