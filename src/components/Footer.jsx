import React from 'react';
import './Footer.css';
import {FaEnvelope, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div>
                <h3 className='footer-list-header'>Existing Customers</h3>
                <ul className='footer-list'>
                    <li><a href='/'>My Account</a></li>
                    <li><a href='/'>Payment Options</a></li>
                    <li><a href='/'>Policy Documents</a></li>
                    <li><a href='/'>Help Centre</a></li>
                    <li><a href='/'>Claims</a></li>
                    <li><a href='/'>Turners Subscription</a></li>
                </ul>
            </div>
            <div>
                <h3 className='footer-list-header'>Cars</h3>
                <ul className='footer-list'>
                    <li><a href='/'>Buy A Car</a></li>
                    <li><a href='/'>Sell Your Car</a></li>
                    <li><a href='/'>Auctions {'&'} Events</a></li>
                    <li><a href='/'>Buyer {'&'} Seller Fees</a></li>
                    <li><a href='/'>Vehicle Sale Price History Tool</a></li>
                    <li><a href='/'>Shipping Costs</a></li>
                </ul>
            </div>
            <div>
                <h3 className='footer-list-header'>Finance {'&'} Insurance</h3>
                <ul className='footer-list'>
                    <li><a href='/'>Car {'&'} Personal Finance</a></li>
                    <li><a href='/'>Trucks Finance</a></li>
                    <li><a href='/'>Car Insurance</a></li>
                    <li><a href='/'>Mechanical Breakdown Insurance</a></li>
                </ul>
            </div>
            <div>
                <h3 className='footer-list-header'>About</h3>
                <ul className='footer-list'>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>About Turners</a></li>
                    <li><a href='/'>Terms and Conditions</a></li>
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
        </div>
        <div className='divider'></div>
        <div className='social-media'>
            <a href='https://www.turners.co.nz/Company/email-alerts/email-alerts/'><FaEnvelope className='social-media-icons'/></a>
            <a href='https://www.facebook.com/turnersNZ'><FaFacebook className='social-media-icons'/></a>
            <a href='https://twitter.com/?lang=en'><FaTwitter className='social-media-icons'/></a>
            <a href='https://www.instagram.com/turners_cars/'><FaInstagram className='social-media-icons'/></a>
        </div>
    </footer>
  )
}

export default Footer