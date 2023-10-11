import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalState: false,
  formName: '',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeStateModal: (state, actions) => {
      state.modalState = actions.payload;
    },
    nameModal: (state, actions) => {
      state.formName = actions.payload;
    },
  },
})

export const { changeStateModal, nameModal } = modalSlice.actions

export default modalSlice.reducer