import React from "react";
import { Snackbar } from "react-native-paper";

const SnackBar = ({ visible, onDismissSnackBar, message }) => (
  <Snackbar
    visible={visible}
    onDismiss={onDismissSnackBar}
    duration={3000}
    action={{
      label: "Dismiss",
      onPress: onDismissSnackBar,
    }}
  >
    {message}
  </Snackbar>
);

export default SnackBar;
