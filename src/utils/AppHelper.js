const AppHelper = {
    hasCompletedStepPersonal: (state) => {
        return state.loaded && state.personal_info.address_line1.length > 0
    },
    hasCompletedStepBank: (state) => {
        return state.loaded && state.bank.name.length > 0
    },
    hasCompletedStepInstitution: (state) => {
        return state.loaded && state.institution.name.length > 0
    },
    hasCompletedStepDocuments: (state) => {
        return state.loaded && state.documents.passport_photo.length > 0 && 
        state.documents.student_id_card.length > 0 && 
        state.documents.original_cert.length > 0 && 
        state.documents.admission_letter.length > 0
    },
    canSubmit: (state) => {
        return AppHelper.hasCompletedStepPersonal(state.personal) && 
        AppHelper.hasCompletedStepBank(state.work) && 
        AppHelper.hasCompletedStepInstitution(state.passport) && 
        AppHelper.hasCompletedStepDocuments(state.travel)
    }
}

export default AppHelper