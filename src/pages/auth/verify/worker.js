import axios from 'axios'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        verifying: false
    }
}
const verify = (instance) => {
    instance.setState({ ...instance.state, verifying: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/auth/applicant/verify",
        data: {
            id: instance.props.match.params.id,
            hash: instance.props.match.params.hash
        }
    }).then(response => handleVerifyResponse(instance, response))
        .catch(error => {
            instance.setState({ ...instance.state, verifying: false })
            alert(error)
        })
}

const handleVerifyResponse = (instance, response) => {
    switch (response.data.status.code) {
        case 200:
            instance.props.history.push('/auth/login')
            break
        default:
            alert(response.data.status.message)
            instance.props.history.push('/auth/login')
    }
}

const Worker = instance => {
    return {
        getDefaultState: getDefaultState,
        verify: () => verify(instance)
    }
}

export default Worker