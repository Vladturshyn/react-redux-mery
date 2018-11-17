import React, { Component } from 'react';
import item1 from '../../assets/images/item1.png';
import item2 from '../../assets/images/item2.png';

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import style from './index.module.scss';

export default class HowItWorks extends Component {
  render() {
    configureAnchors({ scrollDuration: 900 });
    return (
      <ScrollableAnchor id={"works"}>
        <div className={style.section}>
          <div className={style.head}>
            <p>How it works</p>
          </div>
          <div className={style.main}>
              <div className={style.item}>
                <div className={style.textfirst}>
                  <p>Build a Bigger Sales<br/>Pipeline</p>
                  <p>The concept is fairly simple: we look for new opportunities and penetrate new markets by means of Researcher teams, Sales Assistants, SDR’s, Copywriters, QAs and Account Managers for ¼ of the cost which you would spend on having an in-house team. We deliver the same results but remotely, freeing you from hours of hiring, training or managing. Our business model is incredibly powerful.</p>
                </div>
              </div>
              <div className={style.item}>
                <img src={item1} alt='item'/>
              </div>
              <div className={style.item}>
                <img src={item2} alt='item'/>
              </div>
              <div className={style.item}>
                <div className={style.textsecond}>
                  <p>Focus On Data That <br/>Matters</p>
                  <p>We primarily target highly-researched leads. Our Research Team works directly with your in-house Sales Reps on building customized data sets that match the exact specification of your ideal customer profile. As a result, we run geo-targeted, anti-competitive or role-based campaigns that drastically improve your sales conversion rate.</p>
                </div>
              </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}
