import axios from 'axios'
import Validation from '../../../data/validation/validation'
import { EmailValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        processing: false,
        username: "",
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
    validation.addValidationRule(EmailValidationRule, instance.state.username, (error) => instance.state.errors.username = error, { allowNull: false, error: "Invalid" })
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

const reset = (instance) => {
    instance.setState({ ...instance.state, processing: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/applicants/reset",
        data: {
            email: instance.state.username.trim().toLowerCase()
        }
    }).then(response => handleResetResponse(instance, response))
        .catch(error => {
            instance.setState({ ...instance.state, processing: false })
            alert(error)
        })
}

const handleResetResponse = (instance, response) => {
    sessionStorage.setItem("email", instance.state.username.trim().toLowerCase())
    instance.props.history.push('/auth/setup')
}

const Worker = instance => {
    return {
        getDefaultState: getDefaultState,
        isValid: () => isValid(instance),
        reset: () => reset(instance)
    }
}

export default Worker