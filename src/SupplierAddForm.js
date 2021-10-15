import React from 'react';
import axios from "axios";
import {useFormik} from 'formik';


const SupplierAddForm = () => {

    // Note that we have to initialize ALL of fields with values. These

    // could come from props, but since we don’t want to prefill this form,

    // we just use an empty string. If we don’t do this, React will yell

    // at us.

    const formik = useFormik({

        initialValues: {

            name: '',

            checkedAt: '',

            status: false,

            latitude: 0,

            longitude: 0

        },

        onSubmit: values => {

            console.log(values);

            axios
                .post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: values.name,
                    checkedAt: values.checkedAt,
                    status: values.status,
                    latitude: values.latitude,
                    longitude: values.longitude
                })
                .then(() => alert(JSON.stringify(values, null, 2)))
                .catch(e => alert(e.message))

        },

    });

    return (

        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="name">Supplier Name</label>

            <input

                id="name"

                name="name"

                type="text"

                onChange={formik.handleChange}

                value={formik.values.name}

            />


            <label htmlFor="checkedAt">Dernière mise à jour du stock</label>

            <input

                id="checkedAt"

                name="checkedAt"

                type="date"

                onChange={formik.handleChange}

                value={formik.values.checkedAt}

            />


            <label htmlFor="status">Cocher si stock disponible</label>

            <input type="checkbox" id="status" name="status" onChange={formik.handleChange}
                   value={formik.values.status}/>


            <label htmlFor="latitude">Latitude du supplier</label>

            <input

                id="latitude"

                name="latitude"

                type="number"

                onChange={formik.handleChange}

                value={formik.values.latitude}

            />

            <label htmlFor="longitude">Latitude du supplier</label>

            <input

                id="longitude"

                name="longitude"

                type="number"

                onChange={formik.handleChange}

                value={formik.values.longitude}

            />


            <button type="submit">Submit</button>

        </form>

    );

};

export default SupplierAddForm;