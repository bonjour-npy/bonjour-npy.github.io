import clsx from "clsx";
import styles from "./styles.module.css";

import CFMLogo from "@site/static/img/CFM_Circle.png";
import GitHubLogo from "@site/static/img/GitHub_Invertocat_Black.svg";
import UESTCLogo from "@site/static/img/UESTC_logo.png";
import VSCodeLogo from "@site/static/img/vscode.svg";

const FeatureList = [
  {
    title: "电子科技大学",
    img: UESTCLogo,
    description: <>求实求真，大气大为</>,
    link: "https://www.uestc.edu.cn/",
  },
  {
    title: "未来媒体研究中心",
    img: CFMLogo,
    description: <>CENTER FOR FUTURE MEDIA</>,
    link: "https://cfm.uestc.edu.cn/index",
  },
  {
    title: "GitHub",
    img: GitHubLogo,
    description: <>Build Software Better Together</>,
    link: "https://github.com/",
  },
  {
    title: "VS Code",
    img: VSCodeLogo,
    description: <>Code Editing Redefined</>,
    link: "https://github.com/",
  },
  // {
  //   title: '桂林电子科技大学',
  //   img: GUETLogo,
  //   description: (
  //     <>
  //       正德厚学，笃行致新
  //     </>
  //   ),
  //   link: 'https://www.guet.edu.cn/'
  // },
  // {
  //   title: '三院科协',
  //   img: KEXIELogo,
  //   description: (
  //     <>
  //       木起青绿，梦绘初蓝
  //     </>
  //   ),
  //   link: 'https://hello.kexie.space/'
  // },
];

function Feature({ img, title, description, link }) {
  return (
    <div className={clsx("col col--5", styles.featureCard)}>
      <div className={styles.logoWrapper}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={title} className={styles.featureImage} />
        </a>
      </div>
      <div className={clsx("text--center", styles.featureContent)}>
        <div className={clsx("title", styles.featureTitle)}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
