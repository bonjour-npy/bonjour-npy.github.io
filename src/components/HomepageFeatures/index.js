import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '真心',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我希望有一天，我的心可以清如明镜。而我可以在镜前看到自己两鬓的华发，还有老去的容颜。
      </>
    ),
  },
  {
    title: '正义',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        有一天在梦里，为某个渺小的感动，泪流满面。
      </>
    ),
  },
  {
    title: '无畏',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        晃晃悠悠地生活，扭扭捏捏地前进。
        新的月刊被送来的时候，你也来了。
        从此一个一个月都有了意义非凡的开端和美丽的渴望。
      </>
    ),
  },
  {
    title: '同情',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        “我有温度”
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
