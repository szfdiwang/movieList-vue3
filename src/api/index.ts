import $http from 'axios'

const Api = {
  getTheaters: () => {
    return $http({
      url: 'https://douban.uieee.com/v2/movie/in_theaters'
    })
  }
}

export default Api
