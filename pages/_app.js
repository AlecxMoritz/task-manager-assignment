import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

class MyApp extends App {
  state = {
    tasks : [
      {
          title : 'Make Coffee',
          completed : true,
          assignedTo : 'Alecx'          
      },
      {
          title : 'Run disc defrag',
          completed : false,
          assignedTo : 'Alecx'          
      },
      {
          title : 'Get cat food',
          completed : false,
          assignedTo : 'Alecx'
      }
    ]
  };

  addTask = (task) => {
    this.setState({
      tasks : this.state.tasks.concat(task)
    })
  };

  editTask = (task) => {
      let index = this.state.tasks.indexOf(task);
      let tasks = this.state.tasks; 

      tasks.splice(index, 1, task);
      this.setState({
        tasks : tasks
      });
  };

  deleteTask = (task) => {
    console.log('called')
    let index = this.state.tasks.indexOf(task);
    let tasks = this.state.tasks;
    tasks.splice(index, 1);

    console.log(tasks)

    this.setState({
      tasks : tasks
    });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Task Manager</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component { ...pageProps } { ...this.state } addTask={this.addTask} editTask={ this.editTask } deleteTask={ this.deleteTask } />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
