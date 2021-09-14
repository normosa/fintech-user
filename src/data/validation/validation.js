
export function validateRule(validatonRule, value, callback, extras){
    return Object.assign(validatonRule, extras).validate(value, callback)
}

export default class Validation {

    constructor(){
        this.validationRules = []
    }

    addValidationRule = (validatonRule, value, callback, extras) => {
        this.validationRules.push({
            validatonRule: validatonRule,
            value: value,
            callback: callback,
            extras: extras
        })
    }

    validate = () => {
        let isValid = true
        this.validationRules.forEach(({validatonRule, value, callback, extras}) => {
            if(!validateRule(validatonRule, value, callback, extras)){
                isValid = false
            }
        })
        return isValid
    }
}