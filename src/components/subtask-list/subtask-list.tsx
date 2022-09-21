import React from 'react';
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";
import TaskComponent from "../task/task-component";
import {subtaskDeleted} from "../../store/actions";
import {useDispatch} from "react-redux";

type SubtaskListProps = {
  children: Task[] | null;
}

const SubtaskList = ({children}: SubtaskListProps) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(subtaskDeleted(id))
  }

  return (
    <Box
      style={{
        borderLeft: '1px solid #25283b',
        padding: '10px',
        gridArea: 'subtask',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <div>
        <h2>Subtask List</h2>
        <ul className="task-list">
          {children?.map((item, index) =>
            <TaskComponent onDelete={handleDelete} key={index} task={item}/>
          )}
        </ul>
      </div>
    </Box>

  );
};

export default SubtaskList;
