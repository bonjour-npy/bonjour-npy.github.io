import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import GUETLogo from '@site/static/img/GUET_logo.png';
import HDULogo from '@site/static/img/HDU_logo.png';
import XDULogo from '@site/static/img/XDU_logo.png';
import UESTCLogo from '@site/static/img/UESTC_logo.png';
import ECNULogo from '@site/static/img/ECNU_logo.png';
import XMULogo from '@site/static/img/XMU_logo.png';

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
    title: '桂林电子科技大学',
    img: GUETLogo,
    description: (
      <>
        正德厚学，笃行致新
      </>
    ),
  },
  {
    title: '西安电子科技大学',
    img: XDULogo,
    description: (
      <>
        厚德、求真、砺学、笃行
      </>
    ),
  },
  {
    title: '杭州电子科技大学',
    img: HDULogo,
    description: (
      <>
        笃学、力行、守正、求新
      </>
    ),
  },
  // {
  //   title: '电子科技大学',
  //   img: UESTCLogo,
  //   description: (
  //     <>
  //       求实求真，大气大为
  //     </>
  //   ),
  // },
  // {
  //   title: '西安电子科技大学',
  //   img: XDULogo,
  //   description: (
  //     <>
  //       红色西电，创新广研
  //     </>
  //   ),
  // },
  // {
  //   title: '厦门大学',
  //   img: XMULogo,
  //   description: (
  //     <>
  //       自强不息，止于至善
  //     </>
  //   ),
  // },
  // {
  //   title: '华东师范大学',
  //   img: ECNULogo,
  //   description: (
  //     <>
  //       求实创造，为人师表
  //     </>
  //   ),
  // },
];

function Feature({ img, title, description }) {
  // 判断是否加粗
  const isBoldTitle = title === "电子科技大学" || title === "桂林电子科技大学";

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={img} alt="Image" />
        {/* <img src={img} alt="Image" style={{ width: 200, height: 'auto' }} /> */}
      </div>
      <div className="text--center padding-horiz--md">
      <h3 className={clsx({ 'bold-title': isBoldTitle })}>{title}</h3>
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
