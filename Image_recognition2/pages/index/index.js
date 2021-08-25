// pages/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imageList:[],
    },

    uploadbuju1 :function (){
      var that = this;
      wx.chooseImage({
        count: 1,
        sizeType:['compressed'],
        sourceType:['album','camera'],
        
        success:function(res){
          console.log(res.tempFilePaths),
          that.setData({
              imageList:res.tempFilePaths,
              
          })
          that.yasuo(res.tempFilePaths[0])
        },
        fail: function (res) {
          console.log("上传失败！")
        }
      })
      
          
    },
    yasuo:function(img){
      var that = this
      var fileimg=img;
      wx.compressImage({
        src: fileimg,
        quality: 10,
        success: function(res) {
          
          that.setData({
            
            imageList:res.tempFilePath,
            
        })
        }
      })
    },
    senddata :function () {
      var that = this
      console.log(that.data.imageList)
        
        
        var index= 0 
        console.log(that.data.imageList)
        wx.uploadFile({
          url: 'http://127.0.0.1:8090/getimage',
          filePath: this.data.imageList,
          name: 'file',
          formData: {
            'user': 'test'
          },
          timeout:1000000,
          success: function(res){
            var data=JSON.parse(res.data)
            that.setData({

                imageList:'data:image/jpeg;base64,'+data.base64
            })
          }
        })
        console.log(that.data.imageList)
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