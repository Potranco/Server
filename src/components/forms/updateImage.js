import React from 'React'
import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import config from '../../configServer.js'
import {imageAvatar} from '../utils/imageUrl.js'

class UpdateImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    if (!event.target.files.length) return false
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
      .then(imageAvatar)
      .then(this.props.onchange)
      .catch(function (error) {
        console.log('Upload image error: ', error)
        return false
      })
  }

  handleClick () {
    this.setState({onclick: true})
  }

  render () {
    return (
      <div>
        <label>
          Cambiar imagen
          <input type='file' name='image' onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default UpdateImage
