import axios from 'axios'
import { API_ENDPOINT } from '../../config'

const getDefaultState = () => {
    return {
        loading: false,
        summary: {
            credit: 0,
            debit: 0,
            balance: 0
        }
    }
}

const loadSummary = instance => {
    instance.setState({ ...instance.state, loading: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/account/summary",
        headers : {
            "Authorization": instance.props.auth.authorization
        },
        data: {}
    }).then(response => handleLoadSummaryResponse(instance, response))
    .catch(error => alert(error))
}

const handleLoadSummaryResponse = (instance, response) => {
    switch(response.data.status){
        case 200:
            instance.setState({
                ...instance.state,
                loading: false,
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
        loadSummary: () => loadSummary(instance),
        getDefaultState: () => getDefaultState(instance)
    }
}

export default Service