// import {createSlice} from '@reduxjs/toolkit';
// const initialState = {
//     items:[],
//   }
// const cartSlice = createSlice({
//     name:'cart',
//     initialState,
//     reducer: () =>({
//         addItem(state,action){
//             return  [...state.items , action.payload]
//         },
//     })
// });

// export const  {addItem} = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  amount:0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It // doesn't actually mutate the state because it uses the Immer library, // which detects changes to a "draft state" and produces a brand new// immutable state based off those changes
      state.value += 1
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
    clearCart: (state, action) => {
        state.value = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , clearCart} = cartSlice.actions

export default cartSlice.reducer