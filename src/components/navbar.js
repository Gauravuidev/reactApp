import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Home} from './home';
import homeIcon from '../img/homeicon.svg';
import {Radio} from './radio';
import radioIcon from '../img/radioIcon.svg';
import {Discover} from './discover';
import discoverIcon from '../img/discoverIcon.svg';
import {Browse} from './browse';
import browseIcon from '../img/browseIcon.svg';
import {Mymusic} from './mymusic';
import mymusicIcon from '../img/mymusicIcon.svg';

export class Navbar extends Component {
  constructor(props) {
      super(props);

      this.state = {
         open: 'false'
      }
   }

  render() {
    return (
        <div className="routing">
          <nav className="clearfix">
              <ul>
                  <li className="active">
                    <Link to={'/'}>
                      <span className="nav_ic home" data-icon="home">
                        <img src={homeIcon} alt=""/>
                      </span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/Browse'}>
                      <span className="nav_ic browse" data-icon="browse">
                        <img src={browseIcon} alt=""/>
                      </span>
                      <span>Browse</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/Discover'}>
                      <span className="nav_ic discover" data-icon="discover">
                        <img src={discoverIcon} alt=""/>
                      </span>
                      <span>Discover</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/Radio'}>
                      <span className="nav_ic radio" data-icon="radio">
                        <img src={radioIcon} alt=""/>
                      </span>
                      <span>Radio</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/Mymusic'}>
                      <span className="nav_ic mymusic" data-icon="mymusic">
                        <img src={mymusicIcon} alt=""/>
                      </span>
                      <span>My MUsic</span>
                    </Link>
                  </li>
              </ul>
          </nav>
            </div>
  );
}
}
