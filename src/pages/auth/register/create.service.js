import axios from 'axios'
import Validation from '../../../data/validation/validation'
import { StringValidationRule, EmailValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        creating: false,
        firstname: "",
        lastname: "",
        email: "",
        email2: "",
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
    validation.addValidationRule(StringValidationRule, instance.state.firstname, (error) => instance.state.errors.firstname = error, { min: { value: 2, error: "Invalid" }, max: { value: 25, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.lastname, (error) => instance.state.errors.lastname = error, { min: { value: 2, error: "Invalid" }, max: { value: 25, error: "Invalid" } })
    validation.addValidationRule(EmailValidationRule, instance.state.email, (error) => instance.state.errors.email = error, { allowNull: false, error: "Invalid" })
    validation.addValidationRule(EmailValidationRule, instance.state.email2, (error) => instance.state.errors.email2 = error, { allowNull: false })
    let validate = validation.validate()
    if (validate && instance.state.email !== instance.state.email2) {
        validate = false
        alert("Emails do not match")
    }
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

const create = (instance) => {
    instance.setState({
        ...instance.state,
        creating: true,
        flag: {
            type: "",
            text: ""
        }
    })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/create",
        data: {
            firstname: instance.state.firstname,
            lastname: instance.state.lastname,
            username: instance.state.email.trim().toLowerCase(),
            referralCode: instance.props.match.params.referralCode != null? instance.props.match.params.referralCode: ""
        }
    }).then(response => handleCreateResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                creating: false,
                flag: {
                    type: "error",
                    text: "No Network or your device date not correct"
                }
            })
        })
}

const handleCreateResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            sessionStorage.setItem("authorization", response.data.data.authorization)
            instance.props.history.push('/auth/setup')
            break
        case 10001:
            instance.setState({
                ...instance.state,
                creating: false,
                flag: {
                    type: "error",
                    text: "An error occurred"
                }
            })
            break
        default:
            instance.setState({
                ...instance.state,
                creating: false,
                flag: {
                    type: "error",
                    text: response.data.status.message
                }
            })
    }
}

const Service = instance => {
    return {
        getDefaultState: getDefaultState,
        isValid: () => isValid(instance),
        create: () => create(instance)
    }
}

export default Service