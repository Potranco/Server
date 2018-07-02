import React from 'react'
import Header from '../header/index.js'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: props.page || '',
      user: props.user || false
    }
    this.createHeader = this.createHeader.bind(this)
  }

  createHeader (page) {
    return <Header page={page} />
  }

  render () {
    return (
      <div>
        { this.createHeader(this.state.page) }
      </div>
    )
  }
}

export default Page
