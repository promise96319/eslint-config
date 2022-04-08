import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ButtonProps {
  className: string;
}

export interface ButtonState {
  a: number;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {}

  private styleName = 'qtc-Button'

  componentDidMount() {
    console.log('11 ==> ', 11)
  }

  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      a: 33,
    }
  }

  render() {
    const { styleName, props } = this
    const { className } = props
    const rootClass = classNames(styleName, className)
    return (
      <div className={rootClass}>
        hello
      </div>
    )
  }
}
