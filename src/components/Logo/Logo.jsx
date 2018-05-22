import React, { Component } from 'react';

const LIGHT =
  'https://github.com/Echo448X/Team-448X-Logos/blob/master/logo_transparent_background.png?raw=true';
const DARK =
  'https://github.com/Echo448X/Team-448X-Logos/blob/master/logo_transparent_background.png?raw=true';

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="129" height="35" alt="logo" />
        </a>
      </div>
    );
  }
}
