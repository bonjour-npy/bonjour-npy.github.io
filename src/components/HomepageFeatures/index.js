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
  },
  {
    title: '未来媒体研究中心',
    img: CFMLogo,
    description: (
      <>
        CENTER FOR FUTURE MEDIA
      </>
    ),
  },
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
    title: '大学生科技协会',
    img: KEXIELogo,
    description: (
      <>
        木起青绿，梦绘初蓝
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  // 使用三元运算符来判断 title 是否等于特定的值
  // 如果是，则使用 bold 类，否则不使用
  const titleClass = title === '电子科技大学' || title === '未来媒体研究中心' ? 'bold' : 'regular';

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={img} alt="Image" style={{ width: 175, height: 'auto', marginBottom: '0.5rem' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={clsx(titleClass)}>{title}</h3>
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
