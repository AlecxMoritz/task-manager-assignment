import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


const TaskSmallView = (props) => {

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
            <h4>{ props.task.assignedTo }</h4>
        </Paper>
    )
};

export default TaskSmallView;