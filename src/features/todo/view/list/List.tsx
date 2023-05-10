import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/useRedux';
import { getTodos } from '../../model/slice/todoSlice';

import { Filter } from '../filter';
import { Item } from '../item';

import './List.css';

export const List: FC = () => {

	const dispatch = useAppDispatch();
	const { filter } = useParams();
	const { list, loading, error } = useAppSelector(state => state.todos);

	useEffect(() => {
		if (list.length === 0)
			dispatch(getTodos());
	}, []);

	console.log(list);

	const filterList = () => {
		if (filter === 'completed')
			return list.filter((el) => el.completed);

		if (filter === 'active')
			return list.filter((el) => !el.completed);

		return list;
	};

	const filteredList = filterList();

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div className='list__container'>
			<h1>Tasks list</h1>
			<Filter />
			<ul className='list__tasks'>
				{filteredList.map((el: any) => (
					<Item key={el.id} {...el} />
				))}
			</ul>
		</div>
	);
}
