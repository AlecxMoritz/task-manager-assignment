import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const ManageTaskView = (props) => {

    const handleComplete = (task) => {
        task.completed = !task.completed;

        props.editTask(task);
    }

    return (
        <Paper>
            <h1>{ props.task.title }</h1>
            <Checkbox
            checked={props.task.completed}
            onClick={(e) => handleComplete(props.task)}
            inputProps={{
            'aria-label': 'primary checkbox',
            }}
        />
            <Chip size="small" label={ props.task.assignedTo } />
            <Button variant="contained" color="primary" onClick={(e) => props.deleteTask(props.task)}>Delete Task</Button>
        </Paper>
    )
};

export default ManageTaskView;