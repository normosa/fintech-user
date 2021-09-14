import axios from 'axios'
import { API_ENDPOINT } from '../../config'

const getDefaultState = () => {
    return {
        loading: false,
        referrals: [],
        selectedIndex: -1,
        currentPage: 1,
        pageSize: 10,
        total: 0
    }
}

const loadReferrals = instance => {
    instance.setState({ ...instance.state, loading: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/referrals/self",
        headers : {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            offset: (instance.state.currentPage - 1) * instance.state.pageSize,
            limit: instance.state.pageSize,
            criteria: []
        }
    }).then(response => handleLoadReferralsResponse(instance, response))
    .catch(error => alert(error))
}

const handleLoadReferralsResponse = (instance, response) => {
    switch(response.data.status){
        case 200:
            instance.setState({
                ...instance.state,
                loading: false,
                selectedIndex: -1,
                referrals: response.data.data.referrals,
                total: response.data.data.size
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
        loadReferrals: () => loadReferrals(instance),
        getDefaultState: () => getDefaultState(instance)
    }
}

export default Service