import React from 'react';
import './About.css';

const Contact = () => {


  return (
    <div className="container_about">
      <div className="row">
        <p className='heading_about'>
          About us
        </p>
        <div className="col">
          <p className='about_elitebridge'>
            EliteBridge is the platform for connecting customers and suppliers by seasoned professional with first-hand experience and a keen understanding of the unique requirements of each industry for seamless and efficient procurement process, right from product enquiry to product delivery, and beyond. EliteBridge aim towards simplifying & optimizing procurement of industrial goods & supplies, especially in the MRO, spares, and consumables segment, across multiple product categories such as electrical, mechanical, hardware, safety, lighting, and many more. We are providing the solution in Inventory Management system, Tool Management system. Also, we are actively involved in CAD | CAM | CAE i.e., design engineering services
          </p>
        </div>
        <div className="col col2">

          <img src="/images/aboutuspic.png" className='aboutus_pic' />

        </div>

      </div>
      <div className="row row2">

        <div className="col">
          <img src="/images/vision.jpg" className='about_img image1' />
          <h5>VISION</h5>
          <p className='about_info'> To be a reliable and efficient connection between customers and suppliers.</p>
        </div>
        <div className="col">
          <img src="/images/mission.jpg" className='about_img image2' />
          <h5 className='mission'>MISSION</h5>
          <p className='about_info'> Bridging the gap between customers and suppliers for a seamless and efficient procurement process </p>
        </div>
        <div className="col">
          <img src="/images/values.jpg" className='about_img image3' />
          <h5>VALUES</h5>
          <p className='about_info passion'>Passion <br />Integrity<br /> Drive to Win</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;