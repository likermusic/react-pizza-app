import { configureStore } from "@reduxjs/toolkit";
import sliceA from './sliceA'
import sliceB from './sliceB'
import sliceC from './sliceC'


const store = configureStore({
  reducer: {
    stateA: sliceA,
    stateB: sliceB,
    stateC: sliceC,
  },
})

export default store