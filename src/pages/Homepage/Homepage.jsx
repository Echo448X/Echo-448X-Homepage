import React, { Component } from 'react';
import PlatformBlackIntro from './components/PlatformBlackIntro';
import OurTeam from './components/OurTeam';
import RightContentDisplay from './components/RightContentDisplay';
import Footer from './components/Footer';

export default class Homepage extends Component {
  static displayName = 'Homepage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homepage-page">
        <PlatformBlackIntro />
        <OurTeam />
        <RightContentDisplay />
        <Footer />
      </div>
    );
  }
}
