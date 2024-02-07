import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import GUETLogo from '@site/static/img/GUET_logo.png';
import UESTCLogo from '@site/static/img/UESTC_logo.png';
import KEXIELogo from '@site/static/img/KEXIE_logo.png';
import CFMLogo from '@site/static/img/CFM_Circle.png';

const FeatureList = [
  {
    title: '电子科技大学',
    img: UESTCLogo,
    description: (
      <>
        求实求真，大气大为
      </>
    ),
    link: 'https://www.uestc.edu.cn/'
  },
  {
    title: '未来媒体研究中心',
    img: CFMLogo,
    description: (
      <>
        CENTER FOR FUTURE MEDIA
      </>
    ),
    link: 'https://cfm.uestc.edu.cn/index'
  },
  {
    title: '桂林电子科技大学',
    img: GUETLogo,
    description: (
      <>
        正德厚学，笃行致新
      </>
    ),
    link: 'https://www.guet.edu.cn/'
  },
  {
    title: '桂电三院科协',
    img: KEXIELogo,
    description: (
      <>
        木起青绿，梦绘初蓝
      </>
    ),
    link: 'https://hello.kexie.space/'
  },
];

function Feature({ img, title, description, link }) {

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt="Image" style={{ width: 175, height: 'auto', marginBottom: '1.2rem' }} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={clsx('title')}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row')}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
