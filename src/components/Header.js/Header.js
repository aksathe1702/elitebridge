import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { styled } from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Header = ({ isUserLoggedIn ,setIsUserLoggedIn }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
 const navigate = useNavigate();

//  var docRef = db.collection("userdetail").doc("SF");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

const db = firebase.firestore();

// db.collection("userdetail").get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });

const user =  firebase.auth().currentUser;
var useremail;

if (user) {
  // console.log("User is logged in:", user);
  // console.log("User UID:", user.uid);
  // console.log("User UID:", user.email);
  // console.log("User Name:", user.displayName);
  useremail = user.email.split('@')[0];

  var currentUserUID = user.uid;
  var userCollection = db.collection('userDetails');
  var userDocument = userCollection.doc(currentUserUID);

 // Set up a real-time listener for the document
  userDocument.onSnapshot((docSnapshot) => {
    //console.log("Document Snapshot:", docSnapshot);

    if (docSnapshot.exists) {
      var userData = docSnapshot.data();
      //console.log('User data:', userData);
      // You can now use the userData object to access user details
    } else {
      //console.log('User data not found');
    }
  }, (error) => {
    //console.error('Error listening for user data:', error);
  });

  // db.collection('userDetails').onSnapshot((snapshot) =>{
  //   console.log("userdata", snapshot);
  // })

} else {
  console.log('No user is signed in.');
}


  const handleToggle = () => {
    console.log('Menu button clicked');
    setIsOpen(!isOpen);
  };

  const handleToggle1 = () => {
    console.log('Menu button clicked');
    setIsOpen1(!isOpen1);
  };

  const handlesignout = () => {
    firebase.auth().signOut().then(() => {
     
      navigate('/login')
      setIsUserLoggedIn(false);
    }).catch((error) => {
      // An error happened.
    });
  }

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
        case 'Changepassowrd':
          navigate('/forgetpassword');
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
          <img src="/images/profile.png" alt="User Icon" onClick={handleToggle1} />
          {isOpen1 && (
            <DropDown1>
              <span style={{ fontSize: '14px', width: '60px' }}>{useremail}</span><br/><br/>
              <span onClick={() => handleOptionClick('Changepassowrd')}>Change password</span>
              <br/><br/>  
              <span onClick={handlesignout}>Sign Out</span>
            
              {/* <hr /> */}
              {/* <span onClick={() => handleOptionClick('Get App')}>Get App</span>
              <hr /> */}
            </DropDown1>

          )}
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

const DropDown1 = styled.div`
    opacity: 1;
  position: absolute;
  top: 70px;
  right: 120px;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 20px;
  //padding-right: 0;
  font-size: 14px;
  letter-spacing: 2px;
  width: 200px;
  height: 150px;
  font-family: "Source Sans Pro-Bold", Helvetica;
  font-weight: 600;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  span{
    margin: 20px 0;
    cursor: pointer;
  }
`

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
