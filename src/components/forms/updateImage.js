import React from 'React'
import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import config from '../../configServer.js'

class UpdateImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const data = new FormData()
    data.append('image', event.target.files[0])
    data.append('userid', this.props.userid)
    let header = {
      method: 'POST',
      body: data
    }
    let url = config.paths.imageApi

    fetch(url, header)
      .then(function (response) {
        return response.ok && response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch(function (error) {
        console.log('Upload image error: ', error)
        return false
      })
  }

  render () {
    return (
      <input type='file' name='image' onChange={this.handleChange} />
    )
  }
}

export default UpdateImage
