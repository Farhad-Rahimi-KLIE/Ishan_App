import React from "react"
// import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Contact Us</li>
            </ul>
            <p className="text-orange-600">Gmail : www.ishanzadanaveen@gmail.com</p>
            <p>© All Thing Reserved for Ishan Zada Naveen Company.INC copyright 2024</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Call Me</h3>
            <div className='img flexSB grid'>
             <span className="font-bold">Whats'App 0786455688</span>
              <span className="font-bold">Mobile 08659685968</span>
              <span className="font-bold">Mobile 08659685968</span>
              <span className="font-bold">Mobile 08659685968</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
