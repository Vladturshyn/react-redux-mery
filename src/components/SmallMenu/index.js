import React, { Component } from 'react'
import './index.module.scss'
import logo from '../../assets/images/Logo_white.svg'

export default class SmallMenu extends Component {
  render() {
    return (
      <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#works">HOW IT WORKS</a></li>
            <li><img src={logo} alt='logo' /></li>
            <li><a href="#deals">DEALS</a></li>
            <li><a href="#tools">TOOLS</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
      </nav>
    )
  }
}
