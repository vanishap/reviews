import {FaChevronLeft, FaChevronRight,FaQuoteRight} from 'react-icons/fa';
import reviews from './data';
import { useState } from 'react';

const Review= ()=>{
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = reviews[index];
    
    const lengthCheck = (number)=>{
        if(number < 0){
            return reviews.length-1
        }
        if(number > reviews.length-1){
            return 0;
        }
        return number;
    };

     const prevReview = ()=>{
        setIndex((index)=>{
            let currIndex = index + 1;
            return lengthCheck(currIndex);
        })  
     };

    const nextReview = ()=>{
        setIndex((index)=>{
            let currIndex = index - 1;
            return lengthCheck(currIndex);
        })    
     };
//function to display random review
     const surpriseReview= ()=>{
        let randomNumber = Math.floor(Math.random() * reviews.length-1) +1;
        setIndex(randomNumber);
     }
    return(
        <article className='review'>
          <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
            </div>
            <h4 className='author' >{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p> 
            <div className='button-container'>
            <button className='prev-btn' onClick={prevReview}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextReview}>
                <FaChevronRight />
            </button>
            </div>
            <button className='random-btn' onClick={surpriseReview}>Surprise Review</button>      
        </article>   
    )
}
export default Review;