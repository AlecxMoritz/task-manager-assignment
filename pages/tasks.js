import Layout from '../src/components/MyLayout';
import TaskSmallView from '../src/components/tasks/taskSmallView';
import TaskList from '../src/components/tasks/taskList';

import { useEffect } from 'react';

const Tasks = (props) => {
    return (
        <Layout>
            <TaskList tasks={ props.tasks } editTask={ props.editTask } />
        </Layout>
    )
}

export default Tasks;