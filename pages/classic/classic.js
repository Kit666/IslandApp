import {ClassicModel} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel();
let likeModel = new LikeModel();
// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 数据更新，缓存功能 setStorage 保存 latestClassicData
    classicModel.getLatest((res) => {
      this.setData({
        classicData: res
      })
      // 当前是否是最新的期刊逻辑
      // latestClassicData.index-->latestIndex 
      // currentClassicData.index-->currentIndex
      // 对比currentIndex  latestIndex  
    })
  },

  /**
   * 用户点击向左切换按钮的监听函数
   */
  onNext: function (event) {

  },

  /**
   * 用户点击向右切换按钮的监听函数
   */
  onPrevious: function (event) {
    //let index获取classicData.index的数据
    let index = this.data.classicData.index;
    classicModel.getPrevious(index, (res) => {
      console.log(res);
      this.setData({
        classicData: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 用户点击右上角like
   */
  onLike: function(event) {
    // console.log(event);
    let behavior = event.detail.behavior;
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  }

  
})