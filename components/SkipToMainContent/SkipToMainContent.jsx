import React from 'react';
import styles from './SkipToMainContent.module.scss';

const SkipToMainContent = ({ skipLink }) => (
  <a className={styles.SkipToMainContent} href={skipLink}>Skip to main content</a>
);

export default SkipToMainContent;
