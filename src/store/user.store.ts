import { observable, action, computed } from 'mobx'

class UserStore {
  
  @observable credentials: any = {}
  
  @observable user: any = {}
  
  @computed get isAuth() {
    return !!this.credentials.code
  }
  
  @computed get name() { return `${this.user.given_name} ${this.user.family_name}` }
  
  @action setPhone = (phone: string) => {
    this.credentials.phone = phone
  }
  
  @action setCode = async (code: string) => {
    this.credentials.code = code
  }
  
  @action login = (user: any) => {
    this.user = user
  }
  
  @action logout = () => {
    this.credentials = {}
    this.user = {}
  }
}

const user = new UserStore()
export default user
