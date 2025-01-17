import { createSlice } from "@reduxjs/toolkit"

// Масив для зберігання контактів
const initialState = {
    contacts: {
        items: []
    }
}

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    }
})

export const contactsReducer = contactSlice.reducer
export const { addContact, deleteContact } = contactSlice.actions