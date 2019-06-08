import Layout from '../src/components/MyLayout';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const paperStyles = {
    margin : '1em auto',
    padding : '5px 10px',
    display : 'flex',
    flexDirection : 'column'
}

const Create = (props) => {
    const [ title, setTitle ] = useState('');
    const [ assignedTo, setAssignedTo ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let task = {
            title : title,
            completed : false,
            assignedTo : assignedTo
        };

        setTitle('');
        setAssignedTo('');
        props.addTask(task);
    }

    return (
        <Layout>
            <Paper>
                <form onSubmit={(e) => handleSubmit(e)} style={ paperStyles }>
                    <TextField
                        id="standard-name"
                        label="Task Title"
                        margin="normal"
                        value={ title }
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        id="standard-name"
                        label="Assigned To"
                        margin="normal"
                        value={ assignedTo }
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />
                    <Button type="submit">Create Task</Button>
                </form>
            </Paper>
        </Layout>
    );
};

export default Create;