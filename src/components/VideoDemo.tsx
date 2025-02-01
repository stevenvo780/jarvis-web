'use client';
import styles from './VideoDemo.module.css';

export default function VideoDemo() {
  return (
    <div className={styles.videoContainer}>
      <video 
        className={styles.video}
        controls
        autoPlay
        muted
        loop
      >
        <source src="/videos/jarvis.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
