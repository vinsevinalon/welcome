"use client"
// Loading.tsx
import React from 'react';
import styles from './loading.module.css'; // Create a separate CSS module for styling

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading......</p>
    </div>
  );
};

export default Loading;