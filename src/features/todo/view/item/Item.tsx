import React, { FC } from 'react';

import './Item.css';

export const Item: FC = () => {

	return (
		<li className='item__description' >
			<label>
				<input
					type='checkbox'
					checked={true}
				/>
				<a>title</a>
			</label>
		</li>
	);
}
