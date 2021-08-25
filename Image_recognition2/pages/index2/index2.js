// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      videoList:[],
  },
  SC :function(){
      var that = this
      wx.chooseVideo({
        sourceType:['album','camera'],
        maxDuration:60,
        camera:'back',
        success:function(res){
            that.setData({
              // videoList:'http://1.15.222.251:8090/static/output.mp4'
              videoList:res.tempFilePath
            })
        },
        fail: function (res) {
            // print("上传失败！")
            console.log(res)
        }
      })
  },

  senddata :function () {
      var that = this
      console.log(this.data.videoList)
      wx.uploadFile({
        url: 'http://127.0.0.1:8090/getvideo',
        // filePath: 'http://1.15.222.251:8090/static/new2.mp4',
        filePath: this.data.videoList,
        method: "POST",
        name: 'file',
        formData: {
          'user': 'video'
        },
        timeout:1000000,
        success(res){
          console.log(res.data);
          var data=JSON.parse(res.data)
          
          var newvedio ='http://1.15.222.251:8090'+data.ok
          console.log(newvedio);
          wx.clearStorage()
          wx.clearStorageSync()
          that.setData({
            
            videoList:newvedio
          });
        },
        fail(err){
          console.log('获取结果失败！')
          console.log(err)
        }
        
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
