import React, { FC } from 'react';

import './Filter.css';

export const Filter: FC = () => {
	return (
		<div className='filter__links'>
			<a>All</a>
			<a>Completed</a>
			<a>Active</a>
		</div>
	);
}
