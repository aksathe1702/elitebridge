import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { styled } from 'styled-components';

const Header = ({ isUserLoggedIn }) => {

  const [isOpen, setIsOpen] = useState(false);
 const navigate = useNavigate();

  const handleToggle = () => {
    console.log('Menu button clicked');
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option}`);
    setIsOpen(false);

    //Directly navigate to the corresponding URL based on the option
    switch (option) {
      case 'Home':
        navigate('/');
        break;
      case 'Product & Services':
        navigate('/productandservices');
        break;
      case 'Industries':
        navigate('/industry');
        break;
      case 'Careers':
        navigate('/careers');
        break;
      case 'Contact Us':
        navigate('/contactus');
        break;
      default:
        break;
    }
  };
  return (
    
    <div className="Nav"> 
      <div className="logo">
        <a href="/"><img src="\images\White_BG_LOGO_with tagline.svg" alt="Img" /></a>
        
      </div>
      <div className="navmenu">
      <a href="/"><span>Home</span></a>
        <span>Shop</span>
        <a href="/productandservices"><span>Product & Services</span></a>
        <a href="/industry"><span>Industries</span></a>
        <a href='careers'><span>Careers</span></a>
        <a href='contactus'><span>Contact Us</span></a>
      </div>
      {isUserLoggedIn ? (
        <div className="user-icon">
          {/* Render the user icon here */}
          <img src="/images/profile.png" alt="User Icon" />
          <p>SY</p>
        </div>
      ) : (
        <div className="signup">
          <a href="/login"><span>Login</span></a>
        </div>
      )}
      <Menubtn >
          <img src="/images/134216_menu_lines_hamburger_icon.svg" alt="Menu" onClick={handleToggle} />

          {isOpen && (
            <DropDown>
              <span onClick={() => handleOptionClick('Home')}>Home</span>
              <hr />
              <span onClick={() => handleOptionClick('Shop')}>Shop</span>
              <hr />
              <span onClick={() => handleOptionClick('Product & Services')}>Product & Services</span>
              <hr />
              <span onClick={() => handleOptionClick('Industries')}>Industries</span>
              <hr />
              <span onClick={() => handleOptionClick('Careers')}>Careers</span>
              <hr />
              <span onClick={() => handleOptionClick('Contact Us')}>Contact Us</span>
              {/* <hr /> */}
              {/* <span onClick={() => handleOptionClick('Get App')}>Get App</span>
              <hr /> */}
            </DropDown>

          )}
        </Menubtn>
    </div>
    
  )
}

export default Header

const DropDown = styled.div`
  opacity: 0;
  position: absolute;
  top: 50px;
  right: 0px;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 20px;
  //padding-right: 0;
  font-size: 14px;
  letter-spacing: 2px;
  width: 220px;
  font-family: "Source Sans Pro-Bold", Helvetica;
  font-weight: 600;
  transition: opacity 0.5s ease-in-out;
`;

const Menubtn = styled.div`
  position: relative;
  //display: inline-block;
  display: none;
  opacity: 0;

  
  img {
    width: 30px;
    height: 30px;
    //padding-left: 10px;
  }

  /* &:hover */${DropDown} { 
    display: block;
    opacity: 1;
    /* transition: opacity 0.5s ease-in-out; */
    cursor: pointer;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
    display: block;
    margin-right: 15px;
  }

`

// // import React , {useState}from 'react'
// // import { useNavigate } from 'react-router-dom';
// // import './Header.css'
// // import { styled } from 'styled-components';

// // const Header = () => {

// //   const [isOpen, setIsOpen] = useState(false);
// //  // const navigate = useNavigate();

// //   const handleToggle = () => {
// //     console.log('Menu button clicked');
// //     setIsOpen(!isOpen);
// //   };

// //   const handleOptionClick = (option) => {
// //     console.log(`Clicked: ${option}`);
// //     setIsOpen(false);
// //     if (option === 'Home') {
// //       // Navigate to the home section
// //       //scrollToSection('home-section');
// //     } else if (option === 'Product & Services') {
// //       // Navigate to the categories section
// //       //scrollToSection('categories-section');
// //     } else if (option === 'Industries') {
// //       // Navigate to the sign-up page
// //      //navigate('/industry');
// //     } else if (option === 'Contact Us') {
// //       // Navigate to the get app page
// //       //navigate('/getapp');
// //     }
// //   };
// //   return (
    
// //     <div className="Nav"> 
// //       <div className="logo">
// //         <a href="/"><img src="\images\White_BG_LOGO_with tagline.svg" alt="Img" /></a>
        
// //       </div>
// //       <div className="navmenu">
// //       <a href="/"><span>Home</span></a>
        
        
// //         <span>Shop</span>
// //         <a href="/productandservices"><span>Product & Services</span></a>
// //         <a href="/industry"><span>Industries</span></a>
        
// //         <a href='careers'><span>Careers</span></a>
// //         <a href='contactus'><span>Contact Us</span></a>

        
// //       </div>
// //       <div className="signup">
// //         <a href="/login"><span>Login</span></a>
        
// //       </div>
// //       <Menubtn >
// //           <img src="/images/134216_menu_lines_hamburger_icon.svg" alt="Menu" onClick={handleToggle} />

// //           {isOpen && (
// //             <DropDown>
// //               <span onClick={() => handleOptionClick('Home')}>Home</span>
// //               <hr />
// //               <span onClick={() => handleOptionClick('Shop')}>Shop</span>
// //               <hr />
// //               <span onClick={() => handleOptionClick('Product & Services')}>Product & Services</span>
// //               <hr />
// //               <span onClick={() => handleOptionClick('Industries')}>Industries</span>
// //               <hr />
// //               <span onClick={() => handleOptionClick('Careers')}>Careers</span>
// //               <hr />
// //               <span onClick={() => handleOptionClick('Contact Us')}>Contact Us</span>
// //               {/* <hr /> */}
// //               {/* <span onClick={() => handleOptionClick('Get App')}>Get App</span>
// //               <hr /> */}
// //             </DropDown>

// //           )}
// //         </Menubtn>
// //     </div>
    
// //   )
// // }

// // export default Header

// const DropDown = styled.div`
//   opacity: 0;
//   position: absolute;
//   top: 50px;
//   right: 0px;
//   background: #ffffff;
//   border: 1px solid rgba(151, 151, 151, 0.34);
//   border-radius: 4px;
//   box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
//   padding: 20px;
//   //padding-right: 0;
//   font-size: 14px;
//   letter-spacing: 2px;
//   width: 220px;
//   z-index: 1;
//   font-family: "Source Sans Pro-Bold", Helvetica;
//   font-weight: 600;
//   transition: opacity 0.5s ease-in-out;


// `;

// const Menubtn = styled.div`
//   position: relative;
//   //display: inline-block;
//   display: none;
//   opacity: 0;

  
//   img {
//     width: 30px;
//     height: 30px;
//     //padding-left: 10px;
//   }

//   /* &:hover */${DropDown} { 
//     display: block;
//     opacity: 1;
//     /* transition: opacity 0.5s ease-in-out; */
//     cursor: pointer;
//   }

//   @media screen and (max-width: 768px) {
//     opacity: 1;
//     display: block;
//     margin-right: 15px;
//   }

// `
