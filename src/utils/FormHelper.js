const FormHelper = (instance) => {
    return {
        onChange: (e) => {
            if (e.target.type === 'checkbox') {
                instance.setState({
                    ...instance.state,
                    rememberMe: !instance.state.rememberMe
                })
            }
            else {
                instance.setState({
                    ...instance.state,
                    [e.target.name]: e.target.value
                })
            }
        }
    }
}

export default FormHelper