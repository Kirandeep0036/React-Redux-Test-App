import React from "react";
import {createSlice} from "@reduxjs/toolkit";

interface IFormInput {
    data: {
        items: any
    }
}

const initStates: IFormInput = {
    data: {
        items: []
    }
}

const contactSlice = createSlice({
    name: "contact",
    initialState: initStates,
    reducers: {
        addcont: (state, action) => {

            return {
                data: {
                    ...state.data,
                    items: [
                        ...state.data.items,
                        action.payload
                    ]
                }
            }
        },
        updateCont: (state, action) => {
            return {
                data: {
                    ...state.data,
                    items: action.payload
                }
            }
        },
        deleteCont: (state, action) => {
            return {
                data: {
                    ...state.data,
                    items: state.data.items.filter(
                        (item : any, index : number) => index !== action.payload
                    )
                }

            }
        }
    }
})

export const {addcont, updateCont, deleteCont} = contactSlice.actions;
export default contactSlice.reducer;
