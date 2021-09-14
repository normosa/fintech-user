import axios from 'axios'
import { API_ENDPOINT } from '../../../config'
import Validation from '../../../data/validation/validation'
import { StringValidationRule } from '../../../data/validation/rules'

const getDefaultState = () => {
    return {
        creating: false,
        currentPassword: "",
        password: "",
        password2: "",
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
    validation.addValidationRule(StringValidationRule, instance.state.currentPassword, (error) => errors.currentPassword = error, { min: { value: 6, error: "Too short" }, max: { value: 40, error: "Too long" } })
    validation.addValidationRule(StringValidationRule, instance.state.password, (error) => errors.password = error, { min: { value: 6, error: "Too short" }, max: { value: 40, error: "Too long" } })
    validation.addValidationRule(StringValidationRule, instance.state.password2, (error) => errors.password2 = error, { min: { value: 6, error: "Too short" }, max: { value: 40, error: "Too long" } })
    let validate = validation.validate()
    let stateUpdate = {
        errors: errors,
        flag: {
            type: validate ? "" : "error",
            text: validate ? "" : "Validation Failure"
        }
    }
    instance.setState({
        ...instance.state,
        ...stateUpdate
    })
    return validate
}

const chanegPassword = instance => {
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/change-password",
        headers: {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            currentPassword: instance.state.currentPassword,
            password: instance.state.password
        }
    }).then(response => {
        if (response.status === 200) {
            instance.setState({
                ...getDefaultState(),
                flag: getFlag(response.data)
            })
        }
    }).catch(error => alert(error))
}

const getFlag = response => {
    switch (response.status) {
        case 200:
            return {
                type: "success",
                text: "Password Changed"
            }
        default:
            return {
                type: "error",
                text: response.message
            }
    }
}

const Service = instance => {
    return {
        isValid: () => isValid(instance),
        chanegPassword: () => chanegPassword(instance),
        getDefaultState: () => getDefaultState()
    }
}

export default Service