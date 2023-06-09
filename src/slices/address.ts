import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/libraries/redux';

export interface AddressSlice {
  address: string;
  description: string;
}

const initialState: AddressSlice = {
  address: '',
  description: '',
};

const address = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setAddressDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const {setAddress, setAddressDescription} = address.actions;

export const selectAddress = (state: RootState) => state.address;

export default address.reducer;
