import { Commit } from 'vuex'
import { ILoginState, ILoginData, IDownLoadData } from '@/typing/login'
import TYPES from '../actionType/index'
import { post, postDownload } from '@/api/http'
import Url from '../../api/url/index'
interface ICtx {
  commit: Commit,
  state: ILoginState
}
export default {
  async [TYPES.LOGIN] (store: ICtx, payload: ILoginData): Promise<any> {
    const { data, code } = await post(Url.Login, payload)
    if (code === 200) {
      return data
    }
  },
  async [TYPES.CHECKANALYSISDOWN] (store: ICtx, payload: IDownLoadData): Promise<any> {
    const response = await postDownload(Url.checkAnalysisDown, payload)
    if (response) {
      return response
    }
  }
}
