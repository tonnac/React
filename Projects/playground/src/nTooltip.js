import React from "react";
import PropTypes from "prop-types";
import "./nTooltip.scss";

class Tooltip extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
    // this.timer;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleMouseEnter() {
    this.timer = setTimeout(() => {
      this.setState({
        isVisible: true
      });
    }, this.props.delayTime);
  }

  handleMouseLeave() {
    clearTimeout(this.timer);
    this.setState({
      isVisible: false
    });
  }

  render() {
    const isVisible = this.state.isVisible ? " is-visible" : " is-hidden";
    const className = `tooltip ${isVisible}`;

    return (
      <div
        className={className}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <span className="tooltip-label">{this.props.label}</span>
        {this.props.children}
      </div>
    );
  }
}

Tooltip.defaultProps = {
  delayTime: 1500
};

Tooltip.propTypes = {
  label: PropTypes.string.isRequired
};

export default class Like extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    };
  }

  handleClick() {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    const label = this.state.isLiked
      ? "Hey, thanks!"
      : "Tip: Gimme a thumbs up!";
    const className = this.state.isLiked ? "is-liked" : null;
    return (
      <Tooltip label={label}>
        <div
          className={`thumbs-up ${className}`}
          onClick={this.handleClick.bind(this)}
        >
          <svg version="1.1" viewBox="0 0 64 64">
            <path
              d="M11,41.2c0-3.3,0.7-6.5,2.2-9.6h4.7c1.1,0,1.9-0.2,2.4-0.5c0.5-0.4,1.4-1.4,2.6-3l1.1-1.5c1.3-1.7,2.2-2.9,2.7-3.4l7.5-8
                            l2-9l1.2,0.3c4.2,1,6.4,3.5,6.4,7.5c0,1.5-0.7,3.5-2.1,6.2l-0.6,1.1c-1.2,2.3-1.9,4.6-2.2,7.1h1c4,0,7.2,0.7,9.6,2
                            c2.4,1.4,3.6,3.1,3.6,5.4c0,1.9-0.7,3.7-2.2,5.3c0.6,0.9,0.9,1.8,0.9,2.7c0,1-0.3,1.9-0.8,2.5c-0.6,0.7-1.4,1.2-2.5,1.5
                            c0.1,0.5,0.1,0.9,0.1,1.1c0,2.5-1.5,3.9-4.4,4.2c0.1,0.3,0.1,0.6,0.1,0.7c0,2.8-2,4.3-6,4.3h-1.7L35,57.2c-1.8,0.5-3.3,0.7-4.7,0.7
                            c-0.5,0-1.2,0-2.3-0.1c-3.2-1.5-6.3-3.8-9.1-7h-6C11.6,47.6,11,44.4,11,41.2z M19.9,48.7c2.2,3,5.2,5.5,8.8,7.6l1.6,0
                            c0.6,0,1.3-0.1,2.1-0.2l-5-2.2c0.8-1.8,1.9-3.3,3.3-4.3l-2.5-1.2c1.1-1.9,2.2-3.2,3.4-4L30,43.7c0.9-2.1,2.2-3.5,3.9-4.3l-1.4-0.7
                            c1.6-3.5,4.1-5.3,7.6-5.3c0.6,0,1.4,0.1,2.2,0.3c0.8,0.2,1.7,0.5,2.6,0.9l3.3,0l-1.9,2l-1.9-0.1c-1-0.4-1.9-0.8-2.7-1
                            c-0.8-0.2-1.4-0.3-1.9-0.3c-1.9,0-3.4,0.8-4.5,2.5l7.4,3.3h2.5c1.6,0,3-0.5,4.1-1.6c1.1-1.1,1.7-2.4,1.7-4c0-1.7-1.1-3-3.3-3.9
                            c-2.2-0.9-5.4-1.3-9.7-1.3h-1.5l0-1.1c0-3.2,1.1-6.5,3.2-10.1l0.5-0.9c0.9-1.5,1.4-3,1.4-4.3c0-2.5-1.4-4.3-4.1-5.2L36,16.2
                            l-8.2,8.7c-1.4,1.7-2.4,3.1-3.1,4c-1.7,2.4-3,3.9-3.9,4.3c-0.9,0.4-3,0.6-6.4,0.6C13.5,36.4,13,39,13,41.6c0,2.2,0.4,4.6,1.3,7.1
                            H19.9z M40.3,46.1h4.3c1.7,0,2.9-0.2,3.7-0.6c0.8-0.4,1.2-1,1.2-1.9c0-0.4-0.2-0.9-0.5-1.4c-1,0.6-2.6,0.9-4.6,0.9h-2.1l-6.1-2.7
                            c-1.3,0.3-2.5,1.1-3.4,2.4L40.3,46.1z M38.9,51h3c3.2,0,4.7-0.8,4.7-2.4l-0.1-0.5H40l-6.2-2.7c-0.9,0.4-1.7,1-2.3,1.8
                            c-0.1,0.1-0.2,0.2-0.3,0.4L38.9,51z M36.9,56h1.3c2.6,0,4-0.9,4-2.7v-0.2h-3.8l-5.8-2.6c-0.8,0.6-1.4,1.3-1.9,2
                            c-0.1,0.1-0.3,0.3-0.4,0.6L36.9,56z"
            />
          </svg>
        </div>
      </Tooltip>
    );
  }
}
