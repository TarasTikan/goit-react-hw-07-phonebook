import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [deleteContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== payload
      );
    },

    [addContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
