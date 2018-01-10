import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import ChatroomContainer from './chatroom/chatroom_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage';

const App = () => (
  <div>
    <header>
    </header>
    <Switch>
      <ProtectedRoute exact path="/channels/" component={ChatroomContainer}/>
      <ProtectedRoute exact path="channels/:id" component={ChatroomContainer}/>
      <Route path="/" component={Homepage}/>
    </Switch>

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
