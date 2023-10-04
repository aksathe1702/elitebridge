import React from 'react'
import { styled } from 'styled-components'
const Appo = () => {
    return (
        <>
      <div className="container">
        <div className="appointment" style={{ position: 'relative' }}>
          <div
            className="make-an-appointment"
            style={{
              display: 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#f0f0f0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            Make An Appointment Content
          </div>
          Make An Appointment
        </div>
      </div>
      
      </>
    );
  };
  

export default Appo;

const Container = styled.div`
/* styles.module.css */
.container {
  /* Add any container styles if needed */
}

.appointment {
  position: relative;
}

.make-an-appointment {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.appointment:hover .make-an-appointment {
  display: block;
}
`