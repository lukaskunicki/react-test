import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",
    hasError: false,
  };
  isDevInstance =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="container">
          <p className="output-msg">
            There has been an error on the website. Please refresh the page in 5
            minutes.
          </p>
          {this.isDevInstance ? (
            <div className="output-details">
              <p>Error details:</p>
              <code>{errorInfo && errorInfo.componentStack.toString()}</code>
            </div>
          ) : null}
        </div>
      );
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
