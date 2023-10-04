import React from 'react'
import './ProdServ.css'

const ProdServ = () => {
  return (
    <>
    <div className='container_prod'>
    <p className='heading'>
      PRODUCT AND SERVICES
    </p>
    <div className="row">
      <div className="col-sm-5">
        <div className='pic auto img-fluid'>
        <img src='public\images\Automotive & Manufacturing.jpg'/>
        </div>
      </div>
      <div className="col-sm-7">
        <div className='product'>
          <h2 className='title'>Automation & Control</h2>
          <div className='info'>
            <ul>
              <li>Our automation and control solutions include robotics pick and place systems, designed to enhance manufacturing processes and improve efficiency.</li>
              <li> We offer state-of-the-art industrial conveyors that optimize material handling and facilitate smooth workflow within production environments.</li>
              <li> Our team of experts ensures seamless integration of these systems with existing production lines, providing a reliable and efficient solution for our clients.</li>
            </ul>
            <button className="show">Show Product</button>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-5">
        <div className='pic inventory img-fluid'>
        </div>
      </div>
      <div className="col-sm-7">
        <div className='product'>
          <h2 className='title'>Inventory Management:</h2>
          <p className='info'>
            <ul>
              <li>Our intelligent inventory management software provides real-time tracking, monitoring, and analysis of inventory levels.</li>
              <li> With this software, businesses can gain valuable insights into demand patterns, optimize replenishment processes, and reduce excess inventory.</li>
              <li> Additionally, we offer intelligent industrial vending machines, equipped with advanced technology to automate the dispensing and tracking of consumable items.</li>
              <li>These vending machines help streamline inventory management, reduce stockouts, and improve accountability.</li>
            </ul>
            <button className="show">Show Product</button>
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-5">
        <div className='pic con img-fluid'>
        </div>
      </div>
      <div className="col-sm-7">
        <div className='product'>
          <h2 className='title'>Industrial Consumables:</h2>
          <p className='info'>
            <ul>
              <li>We provide a comprehensive range of high-quality industrial consumables, including lubricants, adhesives, safety equipment, and maintenance supplies.</li>
              <li> Our consumable products are sourced from reputable manufacturers, ensuring reliability and performance.</li>
              <li>With our extensive inventory, businesses can conveniently access the necessary supplies to support their operations and maintenance requirements.</li>
            </ul>
            <button className="show">Show Product</button>
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-5">
        <div className='pic CAD img-fluid'>
        </div>
      </div>
      <div className="col-sm-7">
        <div className='product'>
          <h2 className='title'>CAD-CAM and CAE:</h2>
          
          <div className='info'>
            <ul>
              <li>We provide a comprehensive range of high-quality industrial consumables, including lubricants, adhesives, safety equipment, and maintenance supplies.</li>
              <li> Our consumable products are sourced from reputable manufacturers, ensuring reliability and performance.</li>
              <li>With our extensive inventory, businesses can conveniently access the necessary supplies to support their operations and maintenance requirements.</li>
            </ul>
            <button className="show">Show Product</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default ProdServ
