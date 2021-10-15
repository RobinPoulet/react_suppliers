import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const suppliersListSlice = createSlice( {
    name: 'suppliers',
    initialState: {
      value: 0,
      loading: false,
      error: null
    },
    reducers: {
        getSuppliersList: (state) => {
            state.loading = true;
            axios
                .get("https://api-suppliers.herokuapp.com/api/suppliers")
                .then(response => {
                    state.value = response.data;
                    state.loading = false;
                })
                .catch(e => {
                    state.error = true;
                    alert(e);
                });
        }
    }
})

export const {getSuppliersList} = suppliersListSlice.actions

export default suppliersListSlice.reducer