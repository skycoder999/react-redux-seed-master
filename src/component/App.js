import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.ProductsList();
    }

    renderProducts = (productsdata) => {
        if (productsdata) {
            return productsdata.map((data) => {
                return (
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Redux App Seed</h1>
                {this.renderProducts(this.props.datalist)}
            </div>
        )
    }

}


function mapStateToProps(state) {
    console.log(state)
    return {
        datalist: state.products
    }
}


export default connect(mapStateToProps, actions)(App);