import axios from 'axios'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        loading: false,
        ordering: false,
        products: [],
        notes: ""
    }
}

const loadProducts = (instance) => {
    instance.setState({
        ...instance.state,
        loading: true
    })
    axios({
        method: 'get',
        url: API_ENDPOINT + "/products",
        headers: {
            "Authorization": instance.props.auth.authorization
        }
    }).then(response => handleLoadProductsResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                loading: false
            })
            alert(error)
        })
}

const handleLoadProductsResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            instance.setState({
                ...instance.state,
                loading: false,
                products: response.data.data.products.map(product => {
                    return {
                        ...product,
                        price: getPriceByCategory(product.pricings, instance.props.auth.distributor.category),
                        quantity: 0
                    }
                })
            })
            break
        default:
            instance.setState({
                ...instance.state,
                loading: false,
                flag: {
                    type: "error",
                    text: response.data.message
                }
            })
    }
}

const getPriceByCategory = (pricings, category) => {
    for(let i = 0; i < pricings.length; i++){
        if(pricings[i].category === category){
            return pricings[i].amount
        }
    }
    return 0
}

const placeOrder = (instance) => {
    instance.setState({
        ...instance.state,
        ordering: true
    })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/orders/create",
        headers: {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            notes: instance.state.notes,
            items: instance.state.products.filter(product => product.quantity > 0)
        }
    }).then(response => handlePlaceOrderResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                ordering: false
            })
            alert(error)
        })
}

const handlePlaceOrderResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            alert('Order Successful')
            instance.props.history.push('/orders')
            break
        default:
            instance.setState({
                ...instance.state,
                loading: false,
                flag: {
                    type: "error",
                    text: response.data.message
                }
            })
            alert(response.data.message)
    }
}

const Service = instance => {
    return {
        getDefaultState: () => getDefaultState(),
        loadProducts: () => loadProducts(instance),
        placeOrder: () => placeOrder(instance)
    }
}

export default Service