import React from 'react';
import './styles.css';
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";
import TaskComponent from "../task/task-component";
import {detailedSubtaskOpened, subtaskDeleted} from "../../store/actions";
import {useDispatch} from "react-redux";

type SubtaskListProps = {
  children: Task[] | null;
}

const SubtaskList = ({children}: SubtaskListProps) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(subtaskDeleted(id))
  }

  const handleClick = (id: string) => {
    dispatch(detailedSubtaskOpened(id))
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
        {children && children.length > 0 ?
          <>
            <ul className="task-list">
              {children?.map((item, index) =>
                <TaskComponent onClick={handleClick} onDelete={handleDelete} key={index} task={item}/>
              )}
            </ul>
          </>
          :
          <p className="empty-list">There are no items ... Add subtask to main task</p>
        }
      </div>
    </Box>
  );
};

export default SubtaskList;
