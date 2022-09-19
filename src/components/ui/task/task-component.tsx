import React from 'react';
import './styles.css';
import {useDispatch} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, {MenuProps} from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Task} from "../../../types/task";
import {detailedTaskOpened, taskDeleted} from "../../../store/actions";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

interface TaskComponentProps {
  task: Task
}

const TaskComponent = (props: TaskComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = () => {
    dispatch(detailedTaskOpened(props.task.id))
  }

  return (
    <div
      className="task"
      onClick={handleClickMenu}
    >
      <div className="task__wrapper">
        <ul className="task__properties-list">
          <li className="task__properties-item">
            <div className="task__title">
              <span>{props.task?.title}</span>
              <span className="task__title_small">{props.task?.uniqueName}</span>
            </div>
          </li>
          <li className="task__properties-item task-label">
            <span>{props.task?.picked}</span>
          </li>
          <li className="task__properties-item">
            <span>2 more</span>
          </li>
          <li>
            <div className="task__toggle">
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                ...
              </Button>

              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <ListItemText
                    primary="Delete"
                    onClick={() => dispatch(taskDeleted(props.task.id))}
                  />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemText primary="Copy"/>
                </StyledMenuItem>
              </StyledMenu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskComponent;
