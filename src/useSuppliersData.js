import { useState, useEffect } from "react";
import axios from "axios";

const useSuppliersData = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://api-suppliers.herokuapp.com/api/suppliers")
            .then(response => {
                setSuppliers(response.data);
                setLoading(false)
            })
            .catch(e => {
                setError(true);
                alert(e);
            });
    }, []);

    return {sup: suppliers, load: loading, err: error};
}

export default useSuppliersData;