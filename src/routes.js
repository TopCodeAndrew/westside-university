import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/classlist/:class' component={ClassList} />
    </Switch>
)

