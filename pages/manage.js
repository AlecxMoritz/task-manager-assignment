import Layout from '../src/components/MyLayout';
import TaskList from '../src/components/tasks/taskList';
import Paper from '@material-ui/core/Paper';
import ManageTaskList from '../src/components/tasks/manageTaskList';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';

const paperStyles = {
    margin : '1em auto',
    padding : '10px 10px'
}

const warningStyles = {
    color : 'red'
}
const Manage = (props) => {
    const [ tasks, setTasks ] = useState(props.tasks);
    const [ searchDebounce, setSearchDebounce ] = useState(undefined);
    const [ searchText, setSearchText ] = useState('');
    const [ filteredTasks, setFilteredTasks ] = useState([]);
    const [ warning, setWarning ] = useState();

    useEffect(() => {
        handleSearchTwo();
    }, [ searchText, props ])
    

    const handleSearch = (value) => {

        if(searchText.length > 0) {
            if(searchDebounce) {
                clearTimeout(searchDebounce);
            } else {
                setTimeout(() => {
                    setFilteredTasks(tasks.filter(task => task.title.includes(searchText)))
                }, 500)
            }
        } else {
            setFilteredTasks([]);
        }
    }

    const handleSearchTwo = () => {
        setWarning('');
        let filtered = tasks.filter(task => task.title.includes(searchText));

        if(filtered.length > 0 ) {
            console.log('got some tasks')
            setFilteredTasks(filtered)
        } else {
            setWarning('no tasks found')
            setFilteredTasks([])
        }
    }


    return (
        <Layout>
            <Paper style={ paperStyles }>
                <h1>Search for a Task</h1>
                <p style={ warningStyles }>{ warning }</p>
                <MenuItem>
                <TextField
                    id="standard-name"
                    label="Search for a Task"
                    margin="normal"
                    value={ searchText }
                    onChange={(e) => setSearchText(e.target.value)}
                />
                </MenuItem>
            </Paper>
            { filteredTasks.length > 0 ? <ManageTaskList tasks={ filteredTasks } editTask={ props.editTask } deleteTask={ props.deleteTask } /> : <ManageTaskList tasks={ props.tasks } editTask={ props.editTask } deleteTask={ props.deleteTask } /> } 
        </Layout>
    );
};

export default Manage;