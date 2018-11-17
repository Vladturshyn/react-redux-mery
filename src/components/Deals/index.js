import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import style from './index.module.scss';

export default class Deals extends Component {
  render() {
    configureAnchors({ scrollDuration: 900 });
    return (
      <ScrollableAnchor id={"deals"}>
        <div className={style.wrap}>
          <div className={style.text}>
            <p>Start Closing Deals that Drive Your Business</p>
          </div>
          <div className={style.wrapItem}>
            <div className={style.item}>
              <p>100.000</p>
              <p>number of leads</p>
              <p>Pre-Qualified leads delivered in 2017</p>
            </div>
            <div className={style.item}>
              <p>40%</p>
              <p>lower CAC</p>
              <p>Client Acquisition Cost decreases by over 40%</p>
            </div>
            <div className={style.item}>
              <p>4:1</p>
              <p>ROI</p>
              <p>Return on number of deals closed</p>
            </div>
            <div className={style.item}>
              <p>x4</p>
              <p>higher conversion</p>
              <p>Outbound appointments convert x4 better</p>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}
