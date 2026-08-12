'use client';

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Client Exception caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI or silent recovery so page content stays visible
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {this.props.children}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
