import {Notifier} from '../components/Notifier';
import React from 'react';

let snackbarRef = React.createRef();

export default function notify(obj) {
  snackbarRef.openSnackBar({ message: obj.message || obj.toString() });
}
