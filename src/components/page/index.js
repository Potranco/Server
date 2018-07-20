import React from 'react'
import Headers from '../headers/index.js'
import Pages from './pages/index.js'

class Page extends React.Component {
  constructor (props) {
    super(props)
    let page = props.page || 'home'
    this.state = {
      contentPage: Pages[page](props),
      header: Headers[page](props),
      user: props.user || false
    }
  }

  render () {
    let {header, contentPage} = this.state
    return (
      <div className='wrap'>
        {header}
        <div className='Content'>
          {contentPage}
        </div>
      </div>
    )
  }
}

export default Page
