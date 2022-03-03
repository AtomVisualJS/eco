import { createSlice } from "@reduxjs/toolkit";


// The userReducer is a function that takes in the current state and an action,
// and returns the new state.

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isLoggedIn: false,
            isLoading: false,
            error: null
        }
    },
    reducers: {}
});

export default userSlice.reducer;