import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import PostsDisplay from './PostsDisplay'

import CreateAndUpdatePost from './CreateAndUpdatePost'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsDisplay} />
        <Route path="/addPost" component={CreateAndUpdatePost} />
        <Route path="/editPost/:id" component={CreateAndUpdatePost} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
