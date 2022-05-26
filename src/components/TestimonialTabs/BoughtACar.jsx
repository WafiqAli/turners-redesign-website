import React from 'react';
import { useState } from 'react';
import { testimonials } from './testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const BoughtACar = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const reviewList = testimonials[0].Buyers;

    const pageCount = Math.ceil(reviewList.length/3);
    const startIndex = 3 * (currentPage - 1);
    
    let cardList = [];
    let j = 1;
    for (let i = startIndex; i < startIndex + 3; i++) {
        
        if (i < reviewList.length) {
            cardList.push(
                <div className={'review-card c' + j}>
                    <p>{reviewList[i].comment}<br/>
                        <span className='review-card-name-date'>{reviewList[i].name}, {reviewList[i].date}</span>
                    </p>
                </div>
            )
            j++;
        }
    }

    let pageCountCircles = []
    for (let i = 0; i < pageCount; i++) {
        if (currentPage === i + 1) {
            pageCountCircles.push(<div><FontAwesomeIcon className='review-page-circle active' icon={faCircle}/></div>);
        }
        else {
            pageCountCircles.push(<div><FontAwesomeIcon className='review-page-circle' icon={faCircle}/></div>);
        }
    }

    const handleLeftArrowClick = (e) => {
        e.preventDefault();
        
        if (currentPage - 1 < 1) {
            setCurrentPage(1);
        }
        else {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleRightArrowClick = (e) => {
        e.preventDefault();
        
        if (currentPage + 1 > pageCount) {
            setCurrentPage(pageCount);
        }
        else {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <div className='review-container'>
                <FontAwesomeIcon className='review-arrows' onClick={handleLeftArrowClick} icon={faChevronLeft}/>
                {cardList} 
                <FontAwesomeIcon className='review-arrows' onClick={handleRightArrowClick} icon={faChevronRight}/>
            </div>
            <div className='review-page-count'>
                {pageCountCircles}
            </div>
        </div>
    )
}

export default BoughtACar