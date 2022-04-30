import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{null:"",password:"", isLoggedIn: false},
    reducers:{
        login(state,action){
            const actions = action.payload;
            state.email = actions.email;
            state.password = actions.password;
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
})

export const authActions = authSlice.actions;
console.log("authActions", authActions);

export default authSlice;

