import React from 'react'

import CommentList from './CommentList'
import CommentBox from './CommentBox'

export default () => {
  return (
    <div>
      <div>this is my app</div>
        <div>
          <CommentBox />
          <CommentList />
        </div>
    </div>
  )
}