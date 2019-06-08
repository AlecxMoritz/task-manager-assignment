import Layout from '../src/components/MyLayout';
import TaskSmallView from '../src/components/tasks/taskSmallView';

import { useEffect } from 'react';

const Tasks = (props) => {
    return (
        <Layout>
            { props.tasks.map((task, i) => (
                <TaskSmallView key={ i } task={ task } editTask={ props.editTask } />
            ))}
        </Layout>
    )
}

export default Tasks;