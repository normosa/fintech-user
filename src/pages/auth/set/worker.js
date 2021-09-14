import axios from 'axios'
import { API_ENDPOINT } from '../../../config'
import Validation from '../../../data/validation/validation'
import { StringValidationRule } from '../../../data/validation/rules'
import { ScrollIntoFirstError } from '../../../utils/UIHelper'

const getDefaultState = () => {
    return {
        saving: false,
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
        url: API_ENDPOINT + "/auth/applicant/password",
        data: {
            password: instance.state.password,
            id: instance.props.match.params.id,
            hash: instance.props.match.params.hash
        }
    }).then(response => handleSaveResponse(instance, response))
        .catch(error => {
            instance.setState({ ...instance.state, saving: false })
            alert(error)
        })
}

const handleSaveResponse = (instance, response) => {
    switch (response.data.status.code) {
        case 200:
            instance.props.history.push('/auth/login')
            break
        default:
            console.log(response.data.status.message)
            instance.props.history.push('/auth/login')
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