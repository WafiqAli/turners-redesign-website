import React from 'react'

const BackToTop = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className='back-to-top'>
            <button onClick={goToTop}>Back to Top</button>
        </div>
)
}

export default BackToTop