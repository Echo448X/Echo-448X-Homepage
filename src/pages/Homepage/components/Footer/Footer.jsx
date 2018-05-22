import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

export default class Footer extends Component {
  static displayName = 'Footer';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer" style={styles.footer}>
        <IceContainer>
          <Row wrap style={styles.content}>
            <Col xxs={24} m={6} style={styles.share}>
              <a href="https://github.com/orgs/Echo448X/">
                <img
                  style={styles.shareIcon}
                  src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                  alt=""
                />
              </a>
            </Col>
            <p style={styles.copyRight}> © 2018 Echo Robotics</p>
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  logo: {
    color: '#3080FE',
    fontWeight: 'bold',
    fontSize: '28px',
    margin: '12px 0',
  },
  nav: {
    width: '400px',
    margin: '0 auto',
    display: 'flex',
  },
  navItem: {
    width: '25%',
    lineHeight: '54px',
    textAlign: 'center',
  },
  navLink: {
    color: '#666',
    display: 'block',
  },
  share: {
    lineHeight: '54px',
    textAlign: 'center',
  },
  shareIcon: {
    width: '22px',
    height: '22px',
  },
  weChart: {
    marginLeft: '20px',
  },
  copyRight: {
    display: 'flex',
    width: '100%',
    marginTop: '40px',
    justifyContent: 'center',
    fontSize: '12px',
  },
};
