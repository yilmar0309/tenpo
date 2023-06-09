import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@/libraries/redux';

interface Options {
  message?: string | undefined;
  icon?: any;
}

export interface LoadingSlice {
  visible: boolean;
  options: Options;
}

const initialState: LoadingSlice = {
  visible: false,
  options: {
    message: '',
    icon: '',
  },
};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShowLoading: (state, action) => {
      state.visible = true;
      state.options = {...action.payload};
    },
    setHiddenLoading: state => {
      state.visible = false;
    },
  },
});

export const {setShowLoading, setHiddenLoading} = loading.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loading.reducer;
