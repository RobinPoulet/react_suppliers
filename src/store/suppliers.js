import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "suppliers",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        suppliersRequested: (suppliers, action) => {
            suppliers.loading = true;
        },

        suppliersReceived: (suppliers, action) => {
            suppliers.list = action.payload;
            suppliers.loading = false;
        },

        suppliersRequestFailed: (suppliers, action) => {
            suppliers.loading = false;
        },
    },
});

export default slice.reducer;

const { suppliersRequested, suppliersReceived, suppliersRequestFailed } = slice.actions;

const url = "/api/suppliers";

export const loadsuppliers = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: suppliersRequested.type,
            onSuccess: suppliersReceived.type,
            onError: suppliersRequestFailed.type,
        })
    );
};
