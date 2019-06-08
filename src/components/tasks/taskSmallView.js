import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const paperStyles = {
    margin : '1em auto',
    padding : '5px 10px'
}

const TaskSmallView = (props) => {
    const handleComplete = (task) => {
        task.completed = !task.completed;

        props.editTask(task);
    }

    return (
        <Paper style={paperStyles}>
            <h1>{ props.task.title }</h1>
            <Checkbox
            checked={props.task.completed}
            onClick={(e) => handleComplete(props.task)}
            inputProps={{
            'aria-label': 'primary checkbox',
            }}
        />
            <Chip size="small" label={ props.task.assignedTo } />
        </Paper>
    )
};

export default TaskSmallView;