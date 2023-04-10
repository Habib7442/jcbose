import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact Us</h1>

        <div className='contact__innerDiv'>
        <h1 className="schoolTitle">J.C BOSE SENIOR SECONDARY SCHOOL</h1>
        <h3 className="schoolAddress">Chowrangee, Katigorah Part-3, P.O- Katigorah, <br/>District, Cachar, Assam Pin- 788804</h3>
        <h2 className="schoolStream">Arts & Commerce</h2>
        <h4 className="schoolContact">Contact: 8750277834, 9101344868</h4>
        <h5>Email: jcbosejuniorcollege@gmail.com</h5>
        <div className="icon">
            <a target="_blank" href="https://www.facebook.com/bisatktg2015?mibextid=ZbWKwL"><FacebookIcon /></a>
            <a href=""><InstagramIcon /></a>
            <a href=""><TwitterIcon /></a>
            <a href=""><YouTubeIcon /></a>
        </div>
        </div>
    </div>
  )
}

export default Contact