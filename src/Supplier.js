import React from 'react';
import { format } from 'timeago.js';
import DeleteSupplier from "./DeleteSupplier";
import {useDispatch, useSelector} from "react-redux";
import {getSuppliersList} from './features/suppliersList/suppliersListSlice'

function Supplier(props) {

    const supplist = useSelector((state) => state.suppliers.value)
    const dispatch = useDispatch();
    console.log(supplist);

    return (
        <div>
            <button
                onClick={() => dispatch(getSuppliersList())}
            >
                Increment
            </button>
            <h1> {props.name} </h1>
            <h3> {props.status ? "Stock disponible" : "Out of Stock"} </h3>
            <h5>Dernière mise à jour du stock : {format(props.checkedAt)} </h5>

            <DeleteSupplier
                id={props.id}
            />
        </div>
    )
}

export default Supplier;