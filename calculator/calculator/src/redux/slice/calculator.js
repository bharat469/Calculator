import {createSlice} from '@reduxjs/toolkit';

const inititalState = {
  firstNumber: '',
  secondNumber: '',
  sign: '',
  total: null,
  fulldata: [],
};

export const CalculateSlice = createSlice({
  name: 'calulator',
  initialState: inititalState,
  reducers: {
    add(state, action) {
      const Numbers = action.payload;
      state.firstNumber = Numbers.first;
      state.sign = Numbers.sig;
      state.secondNumber = Numbers.second;
      state.total =
        parseFloat(state.firstNumber) + parseFloat(state.secondNumber);
      state.fulldata.push(Numbers);
    },
    Sub(state, action) {
      const SubNumbers = action.payload;
      state.firstNumber = SubNumbers.first;
      state.sign = SubNumbers.sig;
      state.secondNumber = SubNumbers.second;
      state.total =
        parseFloat(state.firstNumber) - parseFloat(state.secondNumber);
      state.fulldata.push(SubNumbers);
    },
    multi(state, action) {
      const Numbers = action.payload;
      state.firstNumber = Numbers.first;
      state.sign = Numbers.sig;
      state.secondNumber = Numbers.second;
      state.total =
        parseFloat(state.firstNumber) * parseFloat(state.secondNumber);
      state.fulldata.push(Numbers);
    },
    div(state, action) {
      const Numbers = action.payload;
      state.firstNumber = Numbers.first;
      state.sign = Numbers.sig;
      state.secondNumber = Numbers.second;
      state.total =
        parseFloat(state.firstNumber) / parseFloat(state.secondNumber);
      state.fulldata.push(Numbers);
    },
    per(state, action) {
      const Numbers = action.payload;
      state.firstNumber = Numbers.first;
      state.sign = Numbers.sig;
      state.secondNumber = Numbers.second;
      state.total =
        parseFloat(state.firstNumber) % parseFloat(state.secondNumber);
      state.fulldata.push(Numbers);
    },
    clear(state) {
      state.firstNumber = '';
      state.sign = '';
      state.total = null;
    },
  },
});

export const calculateAction = CalculateSlice.actions;
