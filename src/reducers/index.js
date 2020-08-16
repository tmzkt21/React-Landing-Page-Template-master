import { combineReducers } from 'redux'
import {ChartReducer} from '../admin/Dashboard/components/chart'
import {MapReducer} from '../admin/Dashboard/components/map/index'
import {MemberManagementReducer} from '../admin/Dashboard/components/memberManagement'
import {ProductRegistrationReducer} from '../admin/Dashboard/components/productRegistration'


const rootReducer  = combineReducers({
    // ChartReducer,
    // MapReducer,
    // MemberManagementReducer,
    // ProductRegistrationReducer

})
export default rootReducer