import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;
const members = [
  {
    name: 'Anthony',
    description: 'The most beautiful robot designer',
    imgUrl: './public/anthony.jpg',
  },
];
const generatorData = (count) => {
  return Array.from({ length: count }).map((item, index) => {
    return {
      name: `${index + 1}`,
      description: '成员的相关简介和描述',
      imgUrl:
        'https://img.alicdn.com/tfs/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png',
    };
  });
};

export default class OurTeam extends Component {
  static displayName = 'OurTeam';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = members;
    return (
      <div className="our-team" style={styles.container}>
        <div style={styles.head}>
          <h2 style={styles.title}>Our Team</h2>
          <p style={styles.intro}>
            We are high school juniors<br />who have dreams for robotics
          </p>
        </div>
        <Row wrap style={styles.items}>
          {data.map((item, index) => {
            return (
              <Col xxs="24" s="12" l="12" style={styles.item} key={index}>
                <img src={item.imgUrl} style={styles.avatar} alt="" />
                <div style={styles.baseInfo}>
                  <h5 style={styles.name}>{item.name}</h5>
                  <p style={styles.description}>{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
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
  head: {
    width: '50%',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
  },
  intro: {
    textAlign: 'center',
    color: '#999',
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
    width: '50%',
    padding: '0 40px',
    margin: '40px 0',
  },
  baseInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '25px',
  },
  name: {
    fontWeight: 'bold',
    margin: '0 0 10px',
    fontSize: '15px',
  },
  description: {
    margin: 0,
    color: '#999',
  },
  avatar: {
    width: '150px',
    height: '150px',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    borderRadius: '50%',
  },
};
