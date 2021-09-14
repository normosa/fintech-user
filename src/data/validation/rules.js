export const StringValidationRule = {
    validate: function (value, callback) {
        if(typeof this.min != 'undefined' && value.length < this.min.value){
            callback(this.min.error)
            return false
        }
        else if(typeof this.max != 'undefined' && value.length > this.max.value){
            callback(this.max.error)
            return false
        }
        callback("")
        return true
    }
}

export const NumberValidationRule = {
    validate: function (value, callback) {
        if(typeof this.min !== 'undefined' && Number(value) < this.min.value){
            callback(this.min.error)
            return false
        }
        else if(typeof this.max !== 'undefined' && Number(value) > this.max.value){
            callback(this.max.error)
            return false
        }
        callback("")
        return true
    }
}

export const EmailValidationRule = {
    validate: function (value, callback) {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if((!this.allowNull && !regex.test(value.toLowerCase())) || (value.length !== 0 && !regex.test(value.toLowerCase()))){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}

export const PhoneValidationRule = {
    validate: function (value, callback) {
        let regex = /^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
        if((!this.allowNull && !regex.test(value)) || (value.length !== 0 && !regex.test(value))){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}

export const DateValidationRule = {
    validate: function (value, callback) {
        let regex = /^\d{4}-\d{2}-\d{2}$/
        let regex2 = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
        if(((!this.allowNull && !regex.test(value)) || (value.length !== 0 && !regex.test(value))) && ((!this.allowNull && !regex2.test(value)) || (value.length !== 0 && !regex2.test(value)))){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}

export const BooleanValidationRule = {
    validate: function (value, callback) {
        if(!this.allowNull && value === false){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}

export const PassportValidationRule = {
    validate: function (value, callback) {
        let regex = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/ig
        if((!this.allowNull && !regex.test(value)) || (value.length !== 0 && !regex.test(value))){
            callback("Invalid")
            return false
        }
        callback("")
        return true
    }
}

export const UrlPathValidationRule = {
    validate: function (value, callback) {
        let regex = /^[a-zA-Z0-9-_/]+$/
        if((!this.allowNull && !regex.test(value)) || (value.length !== 0 && !regex.test(value))){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}

export const FileValidationRule = {
    validate: function (value, callback) {
        if((!this.allowNull && value === null)){
            callback("Invalid")
            return false
        }
        callback("")
            return true
    }
}