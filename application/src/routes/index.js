import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/Home';
import Task from '../views/Task';
import NewTask from '../views/NewTask';
import NewGoal from '../views/NewGoal';
import Login from '../views/Login';
import Goal from '../views/Goal';
import Register from '../views/Register';
import LateTasks from '../views/LateTasks';
import TaskDetails from '../views/TaskDetails';
import GoalDetails from '../views/GoalDetails';
import NotFound from '../components/NotFound';
import { useParams } from 'react-router-dom';


export default function Routes() {
    // const { id } = useParams();


    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Home} />
                <Route path="/tasks" exact component={Task} />
                {/* <Route path="/goal" exact component={NewGoal} /> */}
                <Route path="user/:user_id/goal/:id" exact component={NewGoal} />
                <Route path="/task" exact component={NewTask} />
                {/* <Route path="goal/:goal_id/task" exact component={NewTask} /> */}
                <Route path="/tasks/:id" exact component={TaskDetails} />
                <Route path="/goals" exact component={Goal} />
                <Route path="/goals/:id" exact component={GoalDetails} />
                <Route path="/tasks/filter/late" exact component={LateTasks} />
                <Route path="/error" exact component={NotFound} />
                
            </Switch>
        </BrowserRouter>
    )
}