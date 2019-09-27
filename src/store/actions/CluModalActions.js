import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = (text) => (
  {
    type: OPEN_MODAL,
    text
  }
)

export const closeModal = () => (
  {
    type: CLOSE_MODAL
  }
)

