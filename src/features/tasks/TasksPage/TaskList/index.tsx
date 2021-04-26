import React from 'react';
import { List, Item, Content, Button, StyledLink } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toTask } from '../../../../routes';
import {  selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from '../../tasksSlice';
import searchParam from '../../searchQueryParamName';
import { useQueryParameter } from '../Search/queryParameters';
import { RootState } from '../../../../store';

const TaskList: React.FC<{}> = () => {
  const query: string | null = useQueryParameter({key: searchParam});
  const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task))}
          >
            {task.done ? '✔' : ''}
          </Button>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};
export default TaskList;
