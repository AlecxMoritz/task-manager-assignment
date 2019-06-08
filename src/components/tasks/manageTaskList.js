import ManageTaskView from './manageTaskView';

const ManageTaskList = (props) => {

    return (
        <div>
            {
                props.tasks.map((task, i) => (
                    <ManageTaskView key={ i } task={ task } editTask={ props.editTask } deleteTask={ props.deleteTask }/>
                ))
            }
        </div>
    );
};

export default ManageTaskList;