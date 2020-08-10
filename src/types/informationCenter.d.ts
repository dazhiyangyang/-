/** 资讯中心 */

declare namespace InformationCenter {
  /** 获取列表参数 */
  export interface ListParmas {
    pageNo: number
    pageSize: number
    dictPid: string
    typeId: string
    serverNo: string
    pageType: string
  }

  /** 列表返回值单条信息 */
  export interface Info {
    pages: number
    list: any[]
    id: number
    title: string
    releaseTime: string
    newsCover: string
  }
}
