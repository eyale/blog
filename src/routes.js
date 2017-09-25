import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import KnowledgeSharing from './components/knowledge_sharing'
import PostsShow from './components/posts_show'

export default (
          <Route path='/' component={App}>
            <IndexRoute component={PostsIndex}/>
            <Route path='posts/new' component={PostsNew}/>
			<Route path='knowledge/sharing' component={KnowledgeSharing}/>
            {/*this.props.params.id*/}
            <Route path='posts/:id' component={PostsShow}/>
            <Route path='*' component={PostsIndex} />
          </Route>
      )
