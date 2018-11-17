import React, { Component } from 'react';
import foto1 from '../../assets/images/foto.png';

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.css';
import './style.css';

const content = [
	{
		description:'Founder and CEO',
		img: foto1,
		user: 'Marina Vasilevskaya',
	},
	{
		description:'Founder and CEO',
		img: foto1,
		user: 'Marina Vasilevskaya',
	},
	{
		description:'Founder and CEO',
		img: foto1,
		user: 'Marina Vasilevskaya',
	}
];
export default class OurTeam extends Component {
  render() {
    configureAnchors({ scrollDuration: 900 });
    return (
      <ScrollableAnchor id={"team"}>
        <div className='team'>
          <div className='text'>
            <p>OUR TEAM</p>
          </div>
          <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
            >
              <div className="inner">
                <img src={item.img} alt='foto' />
                <p>{item.user}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ScrollableAnchor>
    )
  }
}