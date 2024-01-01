import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    text: string;
    isReady: boolean
}
const initialState: CounterState = {
    count: 5,
    text: 'Products Available',
    isReady: false
}

const CounterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
        initCounterState(state, action:PayloadAction<number>){
            if( state.isReady) return;
            state.count = action.payload;
            state.isReady = true;
        },
        addOne(state){
            state.count++;
        },
        substractOne(state){
            if (state.count===0) return;
            state.count--;
        },
        reset(state, action: PayloadAction<number>){
            if (state.count<0) action.payload = 0;
            state.count = action.payload;
        }
  }
});

export const {addOne,reset,substractOne, initCounterState} = CounterSlice.actions;

export default CounterSlice.reducer;