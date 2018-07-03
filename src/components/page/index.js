import React from 'react'
import Header from '../header/index.js'
import Pages from './pages/index.js'

class Page extends React.Component {
  constructor (props) {
    super(props)
    let page = props.page || 'home'
    this.state = {
      contentPage: Pages[page](props.user),
      header: '',
      user: props.user || false
    }
  }

  render () {
    let {contentPage} = this.state
    return (
      <div className='wrap'>
        <Header />
        <div className='Content'>
          {contentPage}
        </div>
      </div>
    )
  }
}

export default Page
