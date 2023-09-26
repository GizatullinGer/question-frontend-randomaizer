import React, { useState } from 'react'

import styles from './Accordion.module.css'

export const Accordion = ({ children }) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div className={styles.mark}>
				<span onClick={() => setOpen(false)}>{open && 'x'}</span>
			</div>
			<div
				className={open === false ? styles.accordion : styles.accordionActive}
			>
				{children}
			</div>
			<span className={styles.openBtn} onClick={() => setOpen(!open)}>
				{open === true ? 'Скрыть' : 'Раскрыть'}
			</span>
		</div>
	)
}
