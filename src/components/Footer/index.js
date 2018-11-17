import React, { Component } from 'react';
import logo from '../../assets/images/Logo_white.svg';

import style from './index.module.scss';

const Facebook = () => (
  <div>
     <a href="http://facebook.com">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="3vw" height="3vw" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
      <path fill="#444444" d="M0,0v32h32V0H0z M20.2,10.7l-1.5,0c-1.2,0-1.4,0.6-1.4,1.4v1.8h2.8l-0.4,2.8h-2.4V24h-2.9v-7.3h-2.5v-2.8
      h2.5v-2.1C14.3,9.3,15.8,8,18,8c1,0,1.9,0.1,2.2,0.1V10.7z"/>
    </svg>
    </a>
  </div>
)

const Skype = () => (
  <div>
    <a href="http://skype.com">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="3vw" height="3vw" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
        <path fill="#444444" d="M0,0v32h32V0H0z M22.7,22.7c-0.8,0.8-2,1.3-3.2,1.3c-0.8,0-1.5-0.2-2.2-0.6c-0.4,0.1-0.9,0.1-1.3,0.1
        c-1,0-2-0.2-2.9-0.6c-0.9-0.4-1.7-0.9-2.4-1.6C10,20.6,9.4,19.8,9,18.9C8.6,18,8.4,17,8.4,16c0-0.4,0-0.9,0.1-1.3
        C8.2,14,8,13.3,8,12.5c0-1.2,0.5-2.3,1.3-3.2c0.8-0.8,2-1.3,3.2-1.3c0.7,0,1.5,0.2,2.1,0.5c0,0,0,0,0,0C15,8.5,15.5,8.4,16,8.4
        c1,0,2,0.2,2.9,0.6c0.9,0.4,1.7,0.9,2.4,1.6c0.7,0.7,1.2,1.5,1.6,2.4c0.4,0.9,0.6,1.9,0.6,2.9c0,0.5,0,0.9-0.1,1.4
        c0.4,0.7,0.6,1.4,0.6,2.2C24,20.7,23.5,21.8,22.7,22.7z"/>
        <path fill="#444444" d="M17.4,15.1l-1.8-0.4c-0.7-0.2-1.4-0.4-1.4-1c0-0.6,0.5-1.1,1.5-1.1c2,0,1.8,1.4,2.8,1.4c0.5,0,1-0.3,1-0.8
        c0-1.2-1.9-2.1-3.6-2.1c-1.8,0-3.7,0.8-3.7,2.8c0,1,0.3,2,2.3,2.5l2.4,0.6c0.7,0.2,0.9,0.6,0.9,1c0,0.6-0.6,1.2-1.7,1.2
        c-2.1,0-1.8-1.6-3-1.6c-0.5,0-0.9,0.4-0.9,0.9c0,1,1.2,2.3,3.9,2.3c2.6,0,3.8-1.2,3.8-2.9C19.9,16.6,19.4,15.5,17.4,15.1z"/>
      </svg>
    </a>
  </div>
)
const Linkedin = () => (
  <div>
    <a href="http://linkedin.com">
   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	   width="3vw" height="3vw" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" >
    <path fill="#444444" d="M0,0v32h32V0H0z M11.6,24H8.3V13.3h3.3V24z M9.9,11.9C8.9,11.9,8,11,8,9.9C8,8.9,8.9,8,9.9,8
    c1.1,0,1.9,0.9,1.9,1.9C11.8,11,11,11.9,9.9,11.9z M24,24h-3.3v-5.2c0-1.2,0-2.8-1.7-2.8c-1.7,0-2,1.3-2,2.7V24h-3.3V13.3h3.2v1.5h0
    c0.4-0.8,1.5-1.7,3.1-1.7c3.4,0,4,2.2,4,5.1V24z"/>
  </svg>
  </a>
  </div>
)

export default class Footer extends Component {
  render() { 
    return (
      <footer className={style.wrap}>
        <div className={style.infoWrap}>
          <div className={style.infoItem}>
            <p>+380934053162</p>
            <p>email@domain.com</p>
          </div>
          <div className={style.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <div className={style.social}>
           <Facebook />
           <Skype />
           <Linkedin />
          </div>
        </div>
      </footer>
    )
  }
}
