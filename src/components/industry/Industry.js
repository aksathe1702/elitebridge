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
      image: 'https://s3-alpha-sig.figma.com/img/3ca0/d26a/4577f6b5f249bd725067f461dcf3a401?Expires=1691366400&Signature=MjHoR2-abPomrS2feE32LrIRr59crJksEddt9Y9oBIfd-EoOw7x-3K-MS7duPo-Z3Umv4QWVPjpbj9E1-9TdMg3UHH9sYiFLj6TJ1xNQYVMh-KZ88UkxIQ8nly04MhTGk9mpgdcZEvaRH5oP2AoRuuFQ8dmQJq7JNJpwKsP7p4YZOvWnZ3skIQbYvQQZxQ8vyo980gBoMYBythIck3T5V~cnyQhFrSR5Z4Y6krsztOnBarM62A~2Vt--6aaVPxfAiNSDvDYFUK3D5nHC9fF7HRuu8gY3X7yF51PvvM8Sv4rBnAIztGNKjlTjSTODY27Hy373NcVqDniFSewj1nf8RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      alt: 'Lab & Medical',
      text: ' At our company, we understand the criticality of the lab and medical sectors. We provide cutting-edge solutions for laboratory equipment, medical devices, and healthcare facilities.',
      showImage: true,
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/f879/4f6d/ab07eda1fc15a62d9d94198009b1fed0?Expires=1691366400&Signature=nzJH2hKkZsZkcAVXeOOoC4eLhdgN6GgJRC0hqW05NZoZ-OAQ7PqLK0OtEWgw8JGj8PJKzHvazrgt-hV3jc13VDotwq6Ct5lsjwNbaaVPeqz9UtzQWODk4pcNjdufk9-fYO9RrHgqV1HTbdz0w0Gge0SDFHYqN4OTs5ljQ20KSU5bJ7mpBElscu8I7c799Z28II6dXChQzBjD-m86-nalnV8vONWLMDhq37NoIcdQv7OmKSPA-73A-UR~VAB6eTLjP5TL6eyho-nXshxfyt120KK9IJ4q~p-VrnteDKV32Sy7UQc6hjeqoYDalr-Q4MlKDCkMf0NkzikwRr5LgWq14w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      alt: 'Die & Mould',
      text: 'Die & mould manufacturing is one of our core competencies. Our team of skilled engineers and technicians delivers innovative solutions tailored to meet the unique needs of clients in different industries.',
      showImage: true,
    },
    {},
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
