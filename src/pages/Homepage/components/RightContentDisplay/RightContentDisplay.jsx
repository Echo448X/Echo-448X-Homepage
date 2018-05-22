import React, { Component } from 'react';

export default class RightContentDisplay extends Component {
  static displayName = 'RightContentDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-content-display" style={styles.container}>
        <div className="right-content-display-content" style={styles.content}>
          <div style={styles.col}>
            <img
              src="http://www.pngmart.com/files/5/Doraemon-PNG-Transparent.png"
              alt="img"
              style={styles.image}
            />
          </div>
          <div style={styles.col}>
            <h2 style={styles.title}>Coming Soom</h2>
            <p style={styles.description}>
              A GOOD robot for VEX Turnung Point
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  content: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  col: {
    width: '48%',
    padding: '0 1%',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  description: {
    color: '#999',
    lineHeight: '22px',
  },
  image: {
    width: '100%',
    margin: '0 auto',
    display: 'block',
    maxWidth: '360px',
  },
};
