import axios from 'axios'
import { API_ENDPOINT } from '../../config'

const getDefaultState = () => {
    return {
        loading: false,
        transactions: [],
        filter: [],
        summary: {
            balance: 0
        },
        selectedIndex: -1,
        currentPage: 1,
        pageSize: 10,
        total: 0
    }
}

const loadTransactions = instance => {
    instance.setState({ ...instance.state, loading: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/account/transactions/self",
        headers : {
            "Auth": instance.props.auth.authorization
        },
        data: {
            offset: (instance.state.currentPage - 1) * instance.state.pageSize,
            limit: instance.state.pageSize,
            criteria: instance.state.filter
        }
    }).then(response => handleLoadTransactionsResponse(instance, response))
    .catch(error => alert(error))
}

const handleLoadTransactionsResponse = (instance, response) => {
    switch(response.data.status){
        case 200:
            instance.setState({
                ...instance.state,
                loading: false,
                selectedIndex: -1,
                transactions: response.data.data.transactions,
                total: response.data.data.size,
                summary: response.data.data.summary
            })
            break;
        case 403:
            instance.props.history.push('/auth/login')
            break;
        default:
            alert(response.data.message)
    }
}

const Service = instance => {
    return {
        loadTransactions: () => loadTransactions(instance),
        getDefaultState: () => getDefaultState(instance)
    }
}

export default Service