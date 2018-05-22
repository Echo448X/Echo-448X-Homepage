import React, { Component } from 'react';

export default class PlatformBlackIntro extends Component {
  static displayName = 'PlatformBlackIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          ...styles.wrapper,
          ...styles.backg,
        }}
      >
        <div style={styles.body}>
          <h2 style={styles.title}>Team 448X Echo Robotics</h2>
          <p style={styles.subtitle}>
            A Brand New VEX Robotics Team<br /><br />
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  backg: {
    backgroundImage: 'url(./public/team.jpg)',
    '&::after': {
      filter: 'blur(5px)',
    },
  },
  wrapper: {
    height: 740,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  body: {
    textAlign: 'center',
  },
  title: {
    color: '#d8190f',
    fontSize: 36,
    marginBottom: 20,
    marginTop: 130,
  },
  subtitle: {
    color: '#d8190f',
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: '2px',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: '2px',
  },
  extraBody: {
    textAlign: 'center',
    position: 'relative',
    marginTop: 80,
  },
  image: {
    display: 'block',
    margin: '0 auto',
  },
  extraText: {
    width: 706,
    margin: '0 auto',
    display: 'flex',
    color: '#fff',
  },
  extraTextItemLeft: {
    width: '215px',
    textAlign: 'center',
  },
  extraTextItemCenter: {
    width: '275px',
    textAlign: 'center',
  },
  extraTextItemRight: {
    width: '215px',
    textAlign: 'center',
  },
};
