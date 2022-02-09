import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cd394e78-77fa-4733-ae4a-43c6efc86300'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`
    )
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}


