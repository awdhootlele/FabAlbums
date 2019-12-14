import { ALBUM_DETAIL_SUCCESS, ALBUM_DETAIL_ERROR } from '../actions';

const initialState = {};

export default function albums(state = initialState, action = {}) {
  switch (action.type) {
    case ALBUM_DETAIL_SUCCESS:
      const { data } = action;
      const { id, photos } = data;
      const newState = { ...state };
      newState[id] = photos;
      return { ...newState };

    case ALBUM_DETAIL_ERROR:
      return { ...initialState };

    default:
      return { ...state };
  }
}
