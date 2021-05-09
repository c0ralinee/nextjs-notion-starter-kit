import React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      href='https://space.bilibili.com/387133956'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='View My Bilibili Page'
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 250 250'
        style={{
          fill: '#70B7FD',
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' />
      </svg>
    </a>
  )
}
