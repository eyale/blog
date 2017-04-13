import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'


const Greatings = () => {
    return <div>Hey there! =)</div>
}

export default (
          <Route path='/' component={App}>
            <Route path='*' component={Greatings} />
          </Route>
      )
