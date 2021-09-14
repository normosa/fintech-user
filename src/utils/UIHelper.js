export const ScrollIntoViewById = (id) => {
    let element = document.getElementById(id);
    if (element != null) {
        element.scrollIntoView({ 'behavior': 'smooth' })
    }
}

export const ScrollIntoFirstError = (errors) => {
    let errorIds = Object.keys(errors)

    for (let i = 0; i < errorIds.length; i++) {
        if(errors[errorIds[i]].length > 0){
            ScrollIntoViewById(errorIds[i])
            break;
        }
    }
}

export const FindOptionByValue = (opitons, value) => {
    for (let i = 0; i < opitons.length; i++) {
        if (opitons[i].value === value) {
            return opitons[i]
        }
    }
    return {
        label: "",
        value: ""
    }
}