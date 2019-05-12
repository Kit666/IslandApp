import {config} from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效',
  3000: '期刊不存在'
}

class HTTP {
  request(params) {
    if (!params.methods) {
      params.methosd = "GET";
    }
    wx.request({
      url: config.api_base_url + params.url,
      methods: params.methods,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        //code不是字符串，是数字
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          params.success(res.data)
        } 
        else {
          //服务器异常
          let error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        //api调用失败
        this._show_error(1)
      }
    })
  }

  //名称前加下划线_ , 语义表示这是一个私有方法
  _show_error (error_code) {
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP}