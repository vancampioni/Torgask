import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/Home';
import NewTask from '../views/NewTask';
import NewGoal from '../views/NewGoal';



export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/goals/1/tasks/filter/index" exact component={Home} />
                <Route path="/goals/1/tasks" exact component={NewTask} />
                <Route path="/users/1/goals" exact component={NewGoal} />
                <Route path="/goals/1/tasks/:id" exact component={NewGoal} />
            </Switch>
        </BrowserRouter>
    )
}