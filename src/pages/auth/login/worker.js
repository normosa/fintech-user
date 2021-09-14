import axios from 'axios'
import Validation from '../../../data/validation/validation'
import { StringValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        authenticating: false,
        username: "",
        password: "",
        errors: {},
        flag: {
            type: "",
            text: ""
        }
    }
}

const isValid = instance => {
    let validation = new Validation()
    let errors = instance.state.errors
    validation.addValidationRule(StringValidationRule, instance.state.username, (error) => instance.state.errors.username = error, { min: { value: 6, error: "Invalid" }, max: { value: 20, error: "Invalid" }  })
    validation.addValidationRule(StringValidationRule, instance.state.password, (error) => instance.state.errors.password = error, { min: { value: 6, error: "Invalid" }, max: { value: 40, error: "Invalid" } })
    let validate = validation.validate()
    let stateUpdate = {
        errors: errors,
        flag: {
            type: validate ? "" : "error",
            text: validate ? "" : "Validation Failure"
        }
    }
    ScrollIntoFirstError(errors)
    instance.setState({
        ...instance.state,
        ...stateUpdate
    })
    return validate
}

const authenticate = (instance) => {
    instance.setState({
        ...instance.state,
        authenticating: true,
        flag: {
            type: "",
            text: ""
        }
    })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/login",
        data: {
            username: instance.state.username.trim().toLowerCase(),
            password: instance.state.password
        }
    }).then(response => handleAuthenticateResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                authenticating: false,
                flag: {
                    type: "error",
                    text: "Unknown Error"
                }
            })
        })
}

const handleAuthenticateResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            sessionStorage.setItem("auth", JSON.stringify(response.data.data.auth))
            instance.props.history.push('/')
            break
        default:
            instance.setState({
                ...getDefaultState(),
                authenticating: false,
                flag: {
                    type: "error",
                    text: response.data.message
                }
            })
    }
}

const Worker = instance => {
    return {
        getDefaultState: getDefaultState,
        isValid: () => isValid(instance),
        authenticate: () => authenticate(instance)
    }
}

export default Worker