import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/useRedux';

import { Filter } from '../filter';
import { Item } from '../item';

import './List.css';
import {todosRequest} from "../../model/slice/TodoSlice";

export const List: FC = () => {

	const dispatch = useAppDispatch();
	const { filter } = useParams();
	const { list } = useAppSelector(state => state.todos);

	useEffect(() => {
		// dispatch(todosRequest(''));
	});

	const filterList = () => {
		if (filter === 'completed')
			return list.filter((el) => el.completed);

		if (filter === 'active')
			return list.filter((el) => !el.completed);

		return list;
	};

	const filteredList = filterList();

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
