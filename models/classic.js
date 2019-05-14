//在ClassicModel编写所有关于classic的相关操作

import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP {
  //sCallback参数——作为回调函数、this.request({})——向服务器发送请求
  getLatest (sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res);
        this._setLatestIndex(res.index);
      }
    })
  }

  getPrevious(index, sCallback) {
    this.request({
      url: 'classic/' + index + '/previous',
      success: (res) => {
        sCallback(res);
      }
    })
  }

//isFirst判断当前期刊是否是第一个
  isFirst(index) {
    return index == 1 ? true : false;
  }

//isLatest判断当前期刊是否是最新的一期
//随着产品的运营，期刊数会不断增加
//最新的期刊是Pages里classic生命周期函数中请求的
  isLatest(index) {
    let latestIndex = this._getLatestIndex();
    return latestIndex == index ? true : false;
  }
  // 保存 latestClassicData.index
  // 同步写入缓存Sync
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index);
  }
  _getLatestIndex() {
    let index = wx.getStorageSync('latest');
    return index;
  }
}


export {ClassicModel}