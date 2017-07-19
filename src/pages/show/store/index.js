import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    allDataSourceData: [],
    allDepartmentData: [],
    pushPackages: [],
    allJumpPageData: [],
    getFormPageData: {},
    getFormData: {},
    packageDialogShow: false,
    ruleForm: {
        name: '',
        sources: [],
        department: '',
        totalNumber: '',
        totalNum: '',
        couponDate: '',
        dispatchType: 2,
        cityIds: []
    },
    total: 0
}
export default new Vuex.Store({
        state,
        actions,
        mutations
    }
)
