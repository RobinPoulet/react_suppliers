import React from 'react';
import Supplier from "./Supplier";
import SupplierAddForm from "./SupplierAddForm";
import store from "./app/store";
import {Provider} from 'react-redux'



class SuppliersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suppliersListFilter: []
        }
    }

    componentDidMount() {
        this.setState({
            suppliersListFilter: this.props.suppliers
        })
    }

    filterSuppliersList(event) {
        console.log(event.target.value)
        let filterValue;
        // eslint-disable-next-line default-case
        switch (event.target.value) {
            case 'ok':
                filterValue = true;
                break;
            case 'ko':
                filterValue = false;
                break;
            case '*':
                filterValue = null;
                break;
        }
        filterValue != null ? this.setState({
            suppliersListFilter: this.props.suppliers.filter(supplier =>
                supplier.status === filterValue
            )
        }) : this.setState({
            suppliersListFilter: this.props.suppliers
        })
    }

    onSuppliersListClick = () => alert("Vous allez voir la liste des fournisseurs");

    render() {
        if (this.props.loading) {
            return (
                <img src={"./icon/loading.gif"} alt="gif de chargement"/>
            )
        } else if (this.props.error) {
            return (
                <img src={"./icon/404.gif"} alt="gif d'erreur 404"/>
            )
        } else {
            return (
                <div>
                    <h1>Liste des fournisseurs</h1>
                    <label htmlFor="list-filter">Choisir une catégorie : </label>
                    <select onChange={this.filterSuppliersList.bind(this)}>
                        <option value="">--Please choose an option</option>
                        <option value="ok">OK</option>
                        <option value="ko">KO</option>
                        <option value="*">*</option>
                    </select>
                    <button
                        onClick={this.onSuppliersListClick}
                    >
                        Voir la liste des fournisseurs
                    </button>

                    <ul>
                        {this.state.suppliersListFilter.map((supplier) => (
                            <li key={supplier.id}>
                                <Provider store={store}>
                                <Supplier
                                    name={supplier.name}
                                    status={supplier.status}
                                    checkedAt={supplier.checkedAt}
                                    id={supplier.id}
                                />
                                </Provider>
                            </li>
                        ))}
                    </ul>

                    <SupplierAddForm/>

                </div>
            )
        }
    }
}

export default SuppliersList;