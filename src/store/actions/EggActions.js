import { INCREMENT_CRACKS, SET_HATCHED } from "./types"

export const incrementCracks = () => (
  {
    type: INCREMENT_CRACKS
  }
)

export const setHatched = hatched => (
  {
    type: SET_HATCHED,
    hatched
  }
)

