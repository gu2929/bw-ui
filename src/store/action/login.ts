import { Commit } from 'vuex'
import { ILoginState, ILogin } from '@/typings/login'
import TYPES from '../actionType/index'
// import Url from '../../api/api/index'
interface ICtx {
  commit: Commit,
  state: ILoginState
}
export default {
  async [TYPES.LOGIN] (store: ICtx, payload: ILogin[]): Promise<any> {
    return payload
  }
}
