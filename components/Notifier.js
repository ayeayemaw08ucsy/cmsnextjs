import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export class Notifier extends PureComponent {
  message = ''

  state = {
    open: false,
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ open: true }, () => {
      setTimeout(() => {
        this.setState({ open: false });
      }, 3000);
    });
  }

  handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };

  render() {
    const { isActive } = this.state;
    return (
    //   <div className = {isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
    //     {this.message}
    //   </div>
    <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    message={this.message}
    autoHideDuration={80000}
    onClose={this.handleSnackbarClose}
    open={this.state.open}
    ContentProps={{
      'aria-describedby': 'snackbar-message-id',
    }}/>
    )
  }
}