import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

type ModalProps = {
  showAlert: boolean;
  title: string;
  message: string;
  color: string;
  callback: () => void;
};

export function Modal({
  showAlert,
  title,
  message,
  color,
  callback,
}: ModalProps) {
  return (
    <AwesomeAlert
      titleStyle={{ fontSize: 26, fontFamily: "sans-serif", marginBottom: 10 }}
      contentContainerStyle={{ width: "100%", padding: 14 }}
      messageStyle={{
        fontSize: 16,
        fontFamily: "sans-serif",
        marginBottom: 10,
      }}
      confirmButtonStyle={{ width: "100%" }}
      confirmButtonTextStyle={{ textAlign: "center", fontSize: 18 }}
      show={showAlert}
      showProgress={false}
      title={title}
      message={message}
      confirmButtonColor={color}
      onConfirmPressed={callback}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="Close"
    />
  );
}
