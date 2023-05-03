import React, { FC } from 'react';

import { Filter } from '../filter';
import { Item } from '../item';

import './List.css';

export const List: FC = () => {

	return (
		<div className='list__container'>
			<h1>Tasks list</h1>
			<Filter />
			<ul className='list__tasks'>
					<Item />
			</ul>
		</div>
	);
}
