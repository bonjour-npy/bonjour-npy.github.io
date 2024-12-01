import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        // background: `url(${require('../../static/img/From_NUMMI_to_Tesla_\(5122119787\).jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {/* {'../../static/img/intro.png'} */}
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.buttonFonts)}
            to="/docs/GPU-Server/Guides/welcome">
            🚀 点击查看图像视频计算课题组服务器使用指南
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
