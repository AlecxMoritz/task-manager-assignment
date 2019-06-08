import TaskSmallView from './taskSmallView';

const TaskList = (props) => {

    return (
        <div>
            {
                props.tasks.map((task, i) => (
                    <TaskSmallView key={ i } task={ task } editTask={ props.editTask } />
                ))
            }
        </div>
    );
};

export default TaskList;