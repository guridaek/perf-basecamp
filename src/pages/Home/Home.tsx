import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import heroImage1920 from '../../assets/images/hero_1920.webp';
import heroImage1280 from '../../assets/images/hero_1280.webp';
import heroImage854 from '../../assets/images/hero_854.webp';
import trendingWebp from '../../assets/images/trending.webp';
import findWebp from '../../assets/images/find.webp';
import freeWebp from '../../assets/images/free.webp';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import styles from './Home.module.css';

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className={styles.heroSection}>
        <picture>
          <source srcSet={heroImage854} media="(max-width: 1279px)" />
          <source srcSet={heroImage1280} media="(max-width: 1919px)" />
          <img className={styles.heroImage} src={heroImage1920} alt="hero image" />
        </picture>
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button className={classNames(styles.cta, styles.linkButton)}>start search</button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title="See trending webp" imageSrc={trendingWebp} />
            <FeatureItem title="Find webp for free" imageSrc={findWebp} />
            <FeatureItem title="Free for everyone" imageSrc={freeWebp} />
          </div>
          <Link to="/search">
            <button className={styles.linkButton}>start search</button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
};

export default Home;
