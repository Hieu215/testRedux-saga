import { IMAGES } from '~/constants';
const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      const newList = [...state];
      newList.push(action.images);
      return newList;
    default:
        return state;
  }
};
export default imagesReducer;
