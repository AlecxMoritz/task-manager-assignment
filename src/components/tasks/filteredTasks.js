import TaskSmallView from '../taskSmallView'
const FilteredTasks = (props) => {

    return (
        {
            props.tasks.map((task, i) => (
                <TaskSmallView key={ i } task={ task } />
            ))
        }
    )
}