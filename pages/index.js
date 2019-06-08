import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Layout from '../src/components/MyLayout';


export default function Index() {
  return (
    <Layout>
      <h1>Welcome to Task Manager</h1>
      <h1>This is a Take Home assessment made with the following dependencies</h1>
      <ul>
        <li>React</li>
        <li>NextJs</li>
        <li>Material UI</li>
      </ul>
      <hr />
      <p>Open the side menu to manage tasks</p>
  </Layout> 
  );
}
