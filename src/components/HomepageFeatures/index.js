import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import GUETLogo from '@site/static/img/GUET_logo.jpg';
import SJTULogo from '@site/static/img/SJTU_logo.png';
import ECNULogo from '@site/static/img/ECNU_logo.png';
import XMULogo from '@site/static/img/XMU_logo.jpg';

const FeatureList = [
  {
    title: '桂林电子科技大学',
    img: GUETLogo,
    description: (
      <>
        正德厚学，笃行致新
      </>
    ),
  },
  {
    title: '上海交通大学',
    img: SJTULogo,
    description: (
      <>
        饮水思源，爱国荣校
      </>
    ),
  },
  {
    title: '华东师范大学',
    img: ECNULogo,
    description: (
      <>
        求实创造，为人师表
      </>
    ),
  },
  {
    title: '厦门大学',
    img: XMULogo,
    description: (
      <>
        自强不息，止于至善
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={img} alt="Image" style={{ width: '60%', height: 'auto' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
