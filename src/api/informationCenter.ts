import fetch from '@/utils/fetch'
/**
 * 资讯中心
 */
const informationCenterApi = {
  // 获取资讯列表
  getList(params: any) {
    return fetch({
      url: 'http://192.168.110.100:8089/advisoryCenter/findAll',
      method: 'get',
      params
    })
  }
}
export default informationCenterApi
