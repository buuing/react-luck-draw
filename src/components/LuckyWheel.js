import React from 'react'
import { LuckyWheel as Wheel } from 'lucky-canvas'

export default class LuckyWheel extends React.Component {
  constructor (props) {
    super(props)
    this.myLucky = React.createRef()
  }
  componentDidMount () {
    const { props } = this
    try {
      this.init()
      props.onSuccess && props.onSuccess()
    } catch (err) {
      props.onError && props.onError(err)
    } finally {
      props.onFinally && props.onFinally(err)
    }
  }
  init () {
    const { props } = this
    this.$lucky = new Wheel({
      flag: 'WEB',
      width: props.width,
      height: props.height,
      divElement: this.myLucky.current
    }, {
      ...props,
      start: (...rest) => {
        props.onStart && props.onStart(...rest)
      },
      end: (...rest) => {
        props.onEnd && props.onEnd(...rest)
      }
    })
  }
  play (...rest) {
    this.$lucky.play(...rest)
  }
  stop (...rest) {
    this.$lucky.stop(...rest)
  }
  render () {
    return <div ref={this.myLucky}></div>
  }
}

LuckyWheel.defaultProps = {
  width: '',
  height: '',
  prizes: [],
  blocks: [],
  buttons: [],
  defaultStyle: {},
  defaultConfig: {},
}
