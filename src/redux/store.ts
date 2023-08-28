import { configureStore } from '@reduxjs/toolkit'

import podcastsReducer from './reducer'

export default configureStore({
  reducer: {
    posts: podcastsReducer
  }
})