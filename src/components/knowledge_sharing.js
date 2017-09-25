import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

class KnowledgeSharing extends Component {
  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <h1>
            designing-websites-for-iphone-x
          </h1>
          <Link to='/' className='btn btn-primary'>Home</Link>
          <br />
          <br />
          <p>You need to add to {`<head>`} Use `viewport-fit=cover` to fill the whole screen.</p>
          <br />
          <code>
            {`<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>`}  
          </code>
          <br />
          <p>Adding new css function {`constant`}
          <br />And N.B. to a new props {`safe-area-inset-top, safe-area-inset-right, safe-area-inset-bottom, safe-area-inset-left`}</p>
          <pre>
           {`.post {
                                       padding: 12px;
                                       padding-left: constant(safe-area-inset-left);
                                       padding-right: constant(safe-area-inset-right);
                                   }`} 
          </pre>
           <p>When we rotate back to portrait, the left safe area inset becomes 0px
           to solve this add: </p>
           <br />
            <pre>
           {`@supports(padding: max(0px)) {
                  .post {
                      padding-left: max(12px, constant(safe-area-inset-left));
                      padding-right: max(12px, constant(safe-area-inset-right));
                  }
              }`} 
          </pre>
          <a href='https://webkit.org/blog/7929/designing-websites-for-iphone-x/'>Article</a>
        </div>
      </div>
    )
  }
}

export default KnowledgeSharing