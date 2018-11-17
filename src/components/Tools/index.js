import React, { Component } from 'react';
import hubspot from '../../assets/images/hubspot.png';
import mailchimp from '../../assets/images/mailchimp.png';
import close from '../../assets/images/close.png';
import saleforcepng from '../../assets/images/saleforcepng.png';
import reply from '../../assets/images/reply.png';
import pipedrive from '../../assets/images/Pipedrive.png';
import zoho from '../../assets/images/zoho.png';
import autrech from '../../assets/images/autrech.png';

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";


import style from './index.module.scss';



export default class Tools extends Component {
  render() {
    configureAnchors({ scrollDuration: 900 });
    return (
      <ScrollableAnchor id={"tools"}>
        <div className={style.wrap}>
          <div className={style.text}>
              <p>Integrated with tools you love</p>
          </div>
          <div className={style.itemWrap}>
              <div className={style.item}>
                <img src={hubspot} alt="hubspot"/>
              </div>
              <div className={style.item}>
                <img src={mailchimp} alt="mailchip"/>
              </div>
              <div className={style.item}>
                <img src={close} alt="close"/>
              </div>
              <div className={style.item}>
                <img src={reply} alt="reply"/>
              </div>
              <div className={style.item}>
                <img src={saleforcepng} alt="saleforce"/>
              </div>
              <div className={style.item}>
                <img src={pipedrive} alt="pipedrive"/>
              </div>
              <div className={style.item}>
                <img src={zoho} alt="zoho"/>
              </div>
              <div className={style.item}>
                <img src={autrech} alt="autrech"/>
              </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}
