import React from 'react'

import styles from './Examples.module.css'

export const Examples = ({ children }) => {
	return <div className={styles.example}>{children}</div>
}
