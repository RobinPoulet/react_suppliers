import { useDispatch, useSelector } from "react-redux";
import { loadsuppliers } from "../store/suppliers";
import { useEffect } from "react";

const Suppliers = () => {
    const dispatch = useDispatch();
    const suppliers = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadsuppliers());
    }, [dispatch]);

    return (
        <div>
            <h1>Suppliers</h1>
            <ul>
                {suppliers.map((supplier) => (
                    <li key={supplier.id}>{supplier.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Suppliers;