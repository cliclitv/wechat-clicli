export function request({
  url,
  data = {},
  method
}) {
  // if (wx.getStorageSync('token')) {
  //   data.token = wx.getStorageSync('token');
  // }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://api.clicli.us/${url}`,
      data: data,
      method: method,
      header: {
        'Accept': 'application/json',
      },
      success: res => {
        console.log(res);
        debugger;
        if (res.statusCode !== 201) {
          console.log(res.data.errors);
          // for (i of res.data.errors) {
          //   return wx.showToast({
          //     title: res.data.errors[i],
          //     icon: 'none',
          //     mask: true
          //   })
          // }
          if (res.statusCode >= 500) {
            wx.showToast({
              title: '服务器内部错误',
              icon: 'none',
              duration: 3000
            })
            return
          }
          reject(res.data);
        }
        // if (res.data.ret === 3) {
        //   wx.navigateTo({
        //     url: '/pages/login'
        //   });
        // }
        // if (res.data.ret === 1 ||res.data.success) {
        //   resolve(res.data);
        // } else {
        //   wx.showToast({
        //     title: res.data.info,
        //     icon: 'none'
        //   })
        //   console.error('error:', res);
        //   reject(res.data);
        // }
      },
      fail: err => {
        console.log(err,'err')
        // console.error('error:', err);
        // for (i of err.data.errors) {
        //   return wx.showToast({
        //     title: err.data.errors[i][0],
        //     icon: 'none',
        //     mask: true
        //   })
        // }
        reject(err.data);
      }
    });
  });
}