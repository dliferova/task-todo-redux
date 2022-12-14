import React from 'react';
import './styles.css';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, {MenuProps} from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Task} from "../../types/task";

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
  task: Task,
  onDelete: (id: string) => void,
  onClick: (id: string) => void,
}

const TaskComponent = (props: TaskComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const children = props.task.children ? props.task.children : [];

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = () => {
    props.onClick(props.task.id)
  }

  return (
    <div className="task">
      <div className="task__wrapper">
        <ul
          className="task__properties-list"
          onClick={handleClickMenu}
        >
          <li className="task__properties-item">
            <div className="task__title">
              <span>{props.task.title}</span>
              <span className="task__title_small">{props.task.uniqueName}</span>
            </div>
          </li>
          <li className="task__properties-item task-label">
            <span>{props.task.type}</span>
          </li>
          <li className="task__properties-item">
            {children.length !== 0 ? <span>{children.length} subtask</span> : null}
          </li>
        </ul>
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
                onClick={() => props.onDelete(props.task.id)}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Copy"/>
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
