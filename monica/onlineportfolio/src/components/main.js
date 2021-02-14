import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Aboutpage from './aboutpage';
import Experiencepage from './experiencepage';
import Skillspage from './skillspage';
import Interestpage from './interestpage';
import Awardspage from './awardspage';

const Main = () => (
    <Switch>
        <Route exact path="/homepage" component={Homepage} />
        <Route path="/aboutpage" component={Aboutpage} />
        <Route path="/experiencepage" component={Experiencepage} />
        <Route path="/skillspage" component={Skillspage} />
        <Route path="/interestpage" component={Interestpage} />
        <Route path="/awardspage" component={Awardspage} />
    </Switch>
)

export default Main;