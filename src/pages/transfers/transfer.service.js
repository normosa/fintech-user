const getDefaultState = () => {
    return {
        saving: false,
        accountNumber: "",
        accountName: "",
        amount: "",
        bank: "",
        correspondingBank: "",
        sortCode: "",
        address: "",
        errors: {},
        flag: {
            type: "",
            text: ""
        }
    }
}

const Service = instance => {
    return {
        getDefaultState: getDefaultState
    }
}

export default Service