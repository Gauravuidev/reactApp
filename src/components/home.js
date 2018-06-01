import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import arrow from '../img/arrow.svg';
import {Songs} from './songs';
import {Playlist} from './playlist';
import {Album} from './album';
import {Trending} from './trendingSongs';
import {Recently} from './recentlyPlayed';
import {Epicks} from './editorpicks';
import {GaanaSpecial} from './gaanaSpecial';
import {NewRelease} from './newRelease';
import {TopChart} from './topChart';
import {Showcase} from './showcase';


export class Home extends Component {
  render() {
    console.log('Gaurav',this.props.open);
    console.log('Gaurav');
  // install node module to run this carousel if we want to chnge we should uninstall those carousel
  // react-responsive-carousel
    return (
      <Router>
      <div className="carousele">
        <h2 className="clearfix">
            <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">Trending Songs</a>
            <Link to={'/Songs'} className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
          <Trending/>
          <h2 className="clearfix">
              <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">Top Chart</a>
              <a href="http://loc.gaana.com/songs" data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></a>
          </h2>
        <TopChart/>
          <Showcase/>
        <h2 className="clearfix">
            <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">Recently Played</a>
            <Link to={'/Playlist'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <Recently/>
        <h2 className="clearfix">
            <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">Editor Picks</a>
            <Link to={'/Album'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <Epicks/>
        <h2 className="clearfix">
            <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">Gaana Special</a>
            <Link to={'/Songs'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <GaanaSpecial/>
        <h2 className="clearfix">
            <a data-pjax="" href="http://loc.gaana.com/songs" className="_h1">New Relases</a>
            <a href="http://loc.gaana.com/songs" data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></a>
        </h2>
        <NewRelease/>
        <Switch>
                <Route exact path='/Songs' component={Songs} />
                <Route exact path='/Playlist' component={Playlist} />
                <Route exact path='/Album' component={Album} />
        </Switch>
      </div>
      </Router>
  );
}
}
