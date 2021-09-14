import axios from 'axios'
import Validation from '../../../data/validation/validation'
import { StringValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'
import { API_ENDPOINT } from '../../../config'

const getDefaultState = () => {
    return {
        loading: false,
        saving: false,
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
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
    validation.addValidationRule(StringValidationRule, instance.state.address, (error) => instance.state.errors.address = error, { min: { value: 3, error: "Invalid" }, max: { value: 100, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.city, (error) => instance.state.errors.city = error, { min: { value: 3, error: "Invalid" }, max: { value: 30, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.state, (error) => instance.state.errors.state = error, { min: { value: 3, error: "Invalid" }, max: { value: 50, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.country, (error) => instance.state.errors.country = error, { min: { value: 3, error: "Invalid" }, max: { value: 50, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.phone, (error) => instance.state.errors.phone = error, { min: { value: 11, error: "Invalid" }, max: { value: 15, error: "Invalid" } })
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

const load = (instance) => {
    instance.setState({
        ...instance.state,
        loading: true
    })
    axios({
        method: 'get',
        url: API_ENDPOINT + "/accounts/self",
        headers : {
            "Authorization": instance.props.auth.authorization
        }
    }).then(response => handleLoadResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                loading: false
            })
            alert(error)
        })
}

const handleLoadResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            instance.setState({
                ...instance.state,
                loading: false,
                firstname: response.data.data.account.firstname,
                lastname: response.data.data.account.lastname,
                address: response.data.data.account.address,
                phone: response.data.data.account.phone,
                city: response.data.data.account.city,
                state: response.data.data.account.state,
                country: response.data.data.account.country,
                email: instance.props.auth.username,
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

const save = (instance) => {
    instance.setState({
        ...instance.state,
        saving: true
    })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/update",
        headers : {
            "Authorization": instance.props.auth.authorization
        },
        data: {
            firstname: instance.state.firstname,
            lastname: instance.state.lastname,
            phone: instance.state.phone,
            address: instance.state.address,
            city: instance.state.city,
            state: instance.state.state,
            country: instance.state.country
        }
    }).then(response => handleSaveResponse(instance, response))
        .catch(error => {
            instance.setState({
                ...instance.state,
                saving: false
            })
            alert(error)
        })
}

const handleSaveResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            instance.setState({
                ...instance.state,
                saving: false,
                flag: {
                    type: "success",
                    text: "Saved"
                }
            })
            break
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
        isValid: () => isValid(instance),
        load: () => load(instance),
        save: () => save(instance)
    }
}

export default Service