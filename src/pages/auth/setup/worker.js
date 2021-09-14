import axios from 'axios'
import { API_ENDPOINT } from '../../../config'
import Validation from '../../../data/validation/validation'
import { StringValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'

const getDefaultState = () => {
    return {
        saving: false,
        code: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        password: "",
        password2: "",
        errors: {},
        flag: {
            type: "success",
            text: "Verification Code sent to your email"
        }
    }
}

const isValid = instance => {
    let validation = new Validation()
    let errors = instance.state.errors
    validation.addValidationRule(StringValidationRule, instance.state.code, (error) => instance.state.errors.code = error, { min: { value: 6, error: "Invalid" }, max: { value: 6, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.address, (error) => instance.state.errors.address = error, { min: { value: 3, error: "Invalid" }, max: { value: 100, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.city, (error) => instance.state.errors.city = error, { min: { value: 3, error: "Invalid" }, max: { value: 30, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.state, (error) => instance.state.errors.state = error, { min: { value: 3, error: "Invalid" }, max: { value: 30, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.country, (error) => instance.state.errors.country = error, { min: { value: 3, error: "Invalid" }, max: { value: 30, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.phone, (error) => instance.state.errors.phone = error, { min: { value: 11, error: "Invalid" }, max: { value: 15, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.password, (error) => instance.state.errors.password = error, { min: { value: 6, error: "Invalid" }, max: { value: 40, error: "Invalid" } })
    validation.addValidationRule(StringValidationRule, instance.state.password2, (error) => instance.state.errors.password2 = error, { min: { value: 6, error: "Invalid" }, max: { value: 40, error: "Invalid" } })
    let validate = validation.validate()
    if(validate && instance.state.password !== instance.state.password2) {
        validate = false
        alert("Passwords do not match")
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

const save = (instance) => {
    instance.setState({ ...instance.state, saving: true })
    axios({
        method: 'post',
        url: API_ENDPOINT + "/accounts/setup",
        headers: {
            Authorization: sessionStorage.getItem('authorization')
        },
        data: {
            password: instance.state.password,
            code: Number(instance.state.code),
            phone: instance.state.phone,
            address: instance.state.address,
            city: instance.state.city,
            state: instance.state.state,
            country: instance.state.country
        }
    }).then(response => handleSaveResponse(instance, response))
        .catch(error => {
            instance.setState({ ...instance.state, saving: false })
            alert(error)
        })
}

const handleSaveResponse = (instance, response) => {
    switch (response.data.status) {
        case 200:
            instance.props.history.push('/auth/login')
            break
        default:
            instance.setState({ ...instance.state, saving: false })
            alert(response.data.message)
    }
}

const Worker = instance => {
    return {
        getDefaultState: getDefaultState,
        isValid: () => isValid(instance),
        save: () => save(instance)
    }
}

export default Worker