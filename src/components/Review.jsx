import { useState } from 'react';
import reviewsData from '../data/ReviewData';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from "../css/Reviews.module.css";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewsData[index];
  const checkNumber = (number) => {
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsData.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviewsData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={styles['review']}>
      <div className={styles['img-container']}>
        <img src={image} alt={name} className={styles['person-img']} />
        <span className={styles['quote-icon']}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles['author']}>{name}</h4>
      <p className={styles['job']}>{job}</p>
      <p className={styles['info']}>{text}</p>
      <div className={styles['button-container']}>
        <button className={styles['prev-btn']} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles['next-btn']} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles['random-btn']} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;