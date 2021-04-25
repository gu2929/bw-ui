import { ILoginState } from '@/typing/login'
import TYPES from '../actionType/index'
export default {
  [TYPES.SETLOADING] (state: ILoginState, loading: boolean): void {
    state.Loading = loading
  }
}
