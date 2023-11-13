import React, { useState } from 'react';
import './Industry.css';


const Card = ({ image, alt, text, onClick, onMouseEnter, onMouseLeave, showImage }) => {
  return (
    <div className={`card ${showImage ? 'show-image' : 'show-text'}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {showImage ? (
        <div className="img">
          <img src={image} alt={alt} />
        </div>
      ) : (
        <div className="img2">
          <p className="animated-text" >{text}</p>
        </div>
      )}
      <div className="card_info">
        <h3 className="card_title">{alt}</h3>
      </div>
    </div>
  );
};

const Industry = () => {
  const [cards, setCards] = useState([
    {
      image: '/images/Automotive & Manufacturing.jpg',
      alt: 'Automotive & Manufacturing',
      text: 'Manufacturing Our company specializes in providing solutions. With our expertise and advanced technologies, we help automotive manufacturers streamline their production processes and enhance product quality.',
      showImage: true,
    },
    {
      image: '/images/Industrial-Manufacturing-Services-Header-1200x900-Machine.jpg',
      alt: 'Industrial Machinery',
      text: 'Our team has extensive experience in serving the industrial machinery sector. From heavy-duty equipment to specialized machinery, we assist companies in maximizing operational efficiency and productivity.',
      showImage: true,
    },
    {
      image: '/images/aeropace.jpg',
      alt: 'Aerospace',
      text: 'We have a dedicated division focused on serving the aerospace industry. We adhere to stringent industry standards and work closely with aerospace clients to meet their specific requirements.',
      showImage: true,
    },
    {
      image: '/images/lab and medical.jpg',
      alt:'Lab & Medical',
      text: ' At our company, we understand the criticality of the lab and medical sectors. We provide cutting-edge solutions for laboratory equipment, medical devices, and healthcare facilities.',
      showImage: true,
    },
    {
      image: '/images/Technology trends in the die & mould segment - 1.jpg',
      alt: 'Die & Mould',
      text: 'Die & mould manufacturing is one of our core competencies. Our team of skilled engineers and technicians delivers innovative solutions tailored to meet the unique needs of clients in different industries.',
      showImage: true,
    },
    {
      image: '/images/robatic.jpg',
      alt: 'Robotics and Automation Expertise',
      text: 'We lead in Robotics and Automation innovation. Our expert engineers create tailored solutions across sectors, from manufacturing to healthcare. Join us in revolutionizing industries and optimizing processes for a smarter tomorrow.',
      showImage: true,
    },
  ]);

  const handleCardClick = (index) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
     if( updatedCards[index].showImage = false)
     {
      updatedCards[index].showImage = true
     }
     else
     {
      updatedCards[index].showImage = false
     }
      return updatedCards;
    });
  };

  const handleCardMouseEnter = (index) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index].showImage = false;
      return updatedCards;
    });
  };

  const handleCardMouseLeave = (index) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index].showImage = true;
      return updatedCards;
    });
  };

  return (
    <>
     
      <h1 className='industries'>Industries</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            alt={card.alt}
            text={card.text}
            showImage={card.showImage}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={() => handleCardMouseLeave(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Industry;
