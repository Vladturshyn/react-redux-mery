import React, { Component } from 'react'
import style from './index.module.scss'
import logo from '../../assets/images/Logo_white.svg'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className={style.menu}>
            <img src={logo} alt="logo" />
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#works">HOW IT WORKS</a></li>
            <li><a href="#deals">DEALS</a></li>
            <li><a href="#tools1">TOOLS</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
        </div>

        <div className={style.main}>
          <div className={style.text}>
            <h1>THE SMARTEST WAY TO <br/>DELIVER SALES RESULTS</h1> 
            <a href="#contacts" className={style.button}>REQUEST TRIAL</a>
          </div>
        </div>
        
      </header>
    )
  }
}
