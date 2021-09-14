import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Product from './product/product.component'
import Service from './new-order.service'
import './new-order.styles.scss'
import NumberFormat from 'react-number-format'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'

class NewOrder extends React.Component {

    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    componentDidMount(){
        this.service.loadProducts()
    }

    onQuantityChange = (key, newQuantity) => {
        if(newQuantity < 0) {
            return
        }
        let products  = this.state.products
        products[key].quantity = newQuantity
        this.setState({
            ...this.state,
            products: products
        })
    }

    getTotal = () => {
        let total = 0
        for(let i = 0; i < this.state.products.length; i++){
            if(this.state.products[i].quantity > 0){
                total += (this.state.products[i].quantity * this.state.products[i].price)
            }
        }
        return total
    }

    onPlaceOrder = () => {
        if(this.getTotal() === 0){
            alert('Nothing to place')
        }
        else{
            this.service.placeOrder()
        }
    }

    onResetOrder = () => {
        let products = this.state.products
        for(let i = 0; i < products.length; i++){
            products[i].quantity = 0
        }
        this.setState({
            ...this.state,
            products: products
        })
    }

    render() {
        let total = this.getTotal()
        return (
            <div className="new-order">
                {(this.state.loading || this.state.ordering) && <Dialog><Loading /></Dialog>}
                <div className="header">
                    <h4>New Order</h4>
                </div>
                <div className="header">
                    <label>Item</label>
                    <label>Quantity</label>
                    <label>Unit Price</label>
                    <label>Subtotal</label>
                </div>
                {
                    this.state.products.map((product, key) => <Product key={key} {...product} onChange={(e) => this.onQuantityChange(key, e.target.value)} />)
                }
                <div className="total">
                    {
                        total > 0 && <span>Total: <strong><NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value => value} /></strong></span>
                    }
                </div>
                <div className="buttons">
                    <button onClick={this.onResetOrder}>Reset</button>
                    <button onClick={this.onPlaceOrder}>Place Order</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(NewOrder))