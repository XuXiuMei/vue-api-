// 是否开发模式
export const dev = true



//模块1接口
const loginModule = {//模块1所需接口
  check: '/checke', // 检查验证码
  login:'/login', // 登录,
  Loginout:'/toLogout',// 退出登录
  role: '/role/resoure' // 用户菜单
}


//模块2接口
const userManagement = {//模块2需接口
  getTempUser: 'user/son',
  getUser: '/user/getUsern',
  getAdd:'/user/addn',
  outJson: '/user/unwrap',
  PhoneJson: '/user/Phone'

}

//模块3接口
const loanModule = {//模块3接口
  getBorrow: '/borrower/getBorrowerPartnerByPageJson',
  toEditBorrow: '/borrower/toEditBorrowerPartnerJson'

}



export const api = Object.assign(loginModule,, userManagement, loanModule)//合并每个模块的接口为一个对象，将其挂载在Vue的原型上使用
