import Layout from '../src/components/MyLayout';
import TaskList from '../src/components/tasks/taskList';
import Paper from '@material-ui/core/Paper';
import ManageTaskList from '../src/components/tasks/manageTaskList';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';

const Manage = (props) => {
    const [ tasks, setTasks ] = useState(props.tasks);
    const [ searchDebounce, setSearchDebounce ] = useState(undefined);
    const [ searchText, setSearchText ] = useState('');
    const [ filteredTasks, setFilteredTasks ] = useState([]);


    useEffect(() => {
        handleSearch();
    }, [ searchText ])
    

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

    return (
        <Layout>
            <Paper>
                <h1>Search for a Task</h1>
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