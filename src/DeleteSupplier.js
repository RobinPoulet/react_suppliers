import React from 'react';
import axios from "axios";

export default class DeleteSupplier extends React.Component {

    deleteRequest(id, e) {
        axios
            .delete("https://api-suppliers.herokuapp.com/api/suppliers/" + id)
            .then(() => alert('Le fournisseur a bien été suprimé'))
            .catch(e => alert(e.message))
    }


    render() {

        return (

            <div>

                <h4>Effacer un fournisseur</h4>

                <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRequest(this.props.id, e)}
                >
                    Supprimer le fournisseur
                </button>

            </div>
        )
    }

}
