import axios from 'axios'
import { API_ENDPOINT } from '../../config'

const getDefaultState = () => {
    return {
        saving: false,
        transferring: false,
        progress: 0,
        accountNumber: "",
        accountName: "",
        amount: "",
        bank: "",
        correspondingBank: "",
        transferCode: "",
        sortCode: "",
        address: "",
        errors: {},
        flag: {
            type: "",
            text: ""
        }
    }
}

const transfer = instance => {
    instance.setState({ ...instance.state, saving: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/transfer",
        headers : {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            amount: instance.state.amount,
            accountName: instance.state.accountName,
            accountNumber: instance.state.accountNumber
        }
    }).then(response => handleTransferResponse(instance, response))
    .catch(error => alert(error))
}

const handleTransferResponse = (instance, response) => {
    switch(response.data.status){
        case 200:
            let transferResult = response.data.data
            instance.setState({
                ...instance.state,
                saving: false,
                transferring: true,
                progress: 0,
                transferResult: transferResult
            }, () => {
                if(transferResult.status === 1){
                    instance.startCountDown(100)
                }
                else{
                    instance.startCountDown(Number(transferResult.progress))
                }
            })
            break;
        case 403:
            instance.props.history.push('/auth/login')
            break;
        default:
            instance.setState({
                ...instance.state,
                saving: false,
                flag: {
                    type: "error",
                    text: response.data.message
                }
            })
    }
}

const clearCode = instance => {
    let currentState = instance.state
    //delete currentState.transferResult
    instance.setState({ ...currentState, saving: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/clear/code",
        headers : {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            transferCode: instance.state.transferCode
        }
    }).then(response => handleClearCodeResponse(instance, response))
    .catch(error => alert(error))
}

const handleClearCodeResponse = (instance, response) => {
    switch(response.data.status){
        case 200:
            transfer(instance)
            break;
        case 403:
            instance.props.history.push('/auth/login')
            break;
        default:
            instance.setState({
                ...instance.state,
                saving: false,
                flag: {
                    type: "error",
                    text: response.data.message
                }
            })
    }
}

const Service = instance => {
    return {
        getDefaultState: getDefaultState,
        transfer: () => transfer(instance),
        clearCode: () => clearCode(instance)
    }
}

export default Service