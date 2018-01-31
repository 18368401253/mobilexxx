window.onload=function(){
	// console.log(123)
	var URL=window.location.href;
	var times
	var noncestr 
	var signature
	var img=document.getElementById('wx_pic').src
	// console.log(img)
	console.log(URL)
      $.ajax({
        url:'https://www.ehometd.com/temporary/api/wechat/all.php',
        data:{fc:'getticket' , url:URL,},
        dataType:'json',
        type:'post',
        error:function(e){
          console.log(e)
        },
        success:function(e){
          // console.log(e)
          times=e.timestamp
          noncestr=e.noncestr
          signature=e.signature
			// console.log(times)
			// console.log(noncestr)
			// console.log(signature)


		wx.config({
	    	debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参	数信息会通过log打出，仅在pc端时才会打印。
	    	appId: 'wx6c17826d301a52d2', // 必填，公众号的唯一标识
	    	timestamp: times, // 必填，生成签名的时间戳
	    	nonceStr: noncestr, // 必填，生成签名的随机串
	    	signature: signature,// 必填，签名，见附录1
	    	jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ'] // 	必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});

			wx.ready(()=>{

				wx.onMenuShareAppMessage({
					title: '理享全景', // 分享标题
					desc: '我们正在记录精彩世界', // 分享描述
					link: URL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: img, // 分享图标
					type: 'link', // 分享类型,music、video或link，不填默认为link
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				wx.onMenuShareTimeline({
			    title: '理享全景', // 分享标题
			    link: URL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			    imgUrl: img, // 分享图标
			    success: function () {
			    // 用户确认分享后执行的回调函数
					},
					cancel: function () {
			    // 用户取消分享后执行的回调函数
			    }
				});
				wx.onMenuShareQQ({
					title: '理享全景', // 分享标题
					desc: '我们正在记录精彩世界', // 分享描述
					link:URL, // 分享链接
					imgUrl: img, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				wx.onMenuShareWeibo({
				title: '理享全景', // 分享标题
				desc: '我们正在记录精彩世界', // 分享描述
				link: URL, // 分享链接
				imgUrl: img, // 分享图标
				success: function () {
				// 用户确认分享后执行的回调函数
				},
				cancel: function () {
				// 用户取消分享后执行的回调函数
				}
				});
				wx.onMenuShareQZone({
				title: '理享全景', // 分享标题
				desc: '我们正在记录精彩世界', // 分享描述
				link: URL, // 分享链接
				imgUrl: img, // 分享图标
				success: function () {
				// 用户确认分享后执行的回调函数
				},
				cancel: function () {
				// 用户取消分享后执行的回调函数
				}
				});
			})

        },
      })

}