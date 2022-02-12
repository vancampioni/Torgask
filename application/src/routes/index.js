import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/Home';
import Task from '../views/Task';
import NewTask from '../views/NewTask';
import NewGoal from '../views/NewGoal';
import Login from '../views/Login';
import Goal from '../views/Goal';



export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/users/:user_id/home" exact component={Home} />
                <Route path="/goals/:goal_id/tasks/filter/index" exact component={Task} />
                <Route path="/goals/:goal_id/tasks" exact component={NewTask} />
                <Route path="/users/:user_id/goal" exact component={NewGoal} />
                <Route path="/goals/:goal_id/tasks/:id" exact component={NewTask} />
                <Route path="/index" exact component={Login} />
                <Route path="/users/:user_id/goals" exact component={Goal} />
                
            </Switch>
        </BrowserRouter>
    )
}