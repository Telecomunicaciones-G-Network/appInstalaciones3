import Toast from "react-native-toast-message";

export const ToastSuccess = (message:string) => {
  return Toast.show({
    type: "success",
    text1: "Exito ✅",
    text2: message,
  });
};
export const ToastError = (message:string) => {
  return Toast.show({
    type: "error",
    text1: "Error ❌",
    text2: message,
  });
};
