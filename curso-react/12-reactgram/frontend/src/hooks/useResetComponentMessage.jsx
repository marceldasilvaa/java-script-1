// redux
import { resetMessage } from "../slices/PhotoSlice";

export const resetComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};
