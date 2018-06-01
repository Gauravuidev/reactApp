import React, { Component } from 'react';
import {Navbar} from './navbar';
import {Adver} from './adver';
export class Centercontent extends Component {
  render() {
    return (
      <div className="content clearfix" pjax-div="" id="main_middle_content">
          <Navbar/>
          <Adver/>
    </div>
  );
}
}
