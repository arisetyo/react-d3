/**
 * Copyright: 	AMP (2019)
 * Author: 			Arie M. Prasetyo
 * Created:			2019-08-26
 */

import React from 'react';
import {Documentation as AreaChartDoc} from './charts/AreaChart';
import {Documentation as LineChartDoc} from './charts/LineChart';
import {Documentation as SparkLineDoc} from './charts/SparkLine';

import styles from './App.css';
import {sxywuData} from './utils';

const App = () => (
	<div className={styles.App}>
		<div className={styles.description}>
			<h1>Charting component</h1>
			<p>Charting components are charts created using D3 library wrapped inside a React component.</p>
		</div>

		<div className={styles.container}>
			<div className={styles.chart}><LineChartDoc/></div>
			<div className={styles.chart}><AreaChartDoc/></div>

			<div className={styles.chart}><SparkLineDoc/></div>
			<div className={styles.chart}>...</div>
		</div>
	</div>
);

export default App;