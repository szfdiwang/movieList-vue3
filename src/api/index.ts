import http from '../utils/request'

const Api = {
  getTheaters: () => {
    return http({
      url: 'https://douban.uieee.com/v2/movie/in_theaters'
    })
  },
  queryMovieByPage: (data: object) => {
    return http({
      method: 'post',
      url: '/v1/queryMovieByPage',
      data: data
    })
  }
}

export default Api
