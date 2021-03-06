const txvContext = requirePlugin("tencentvideo");
const sysInfo =wx.getSystemInfoSync()

Page({
	data: {
		top: 0,
		currVideo:{},
		videoList: [{
			vid:'i0918g4tzmr',
			title:'新闻大事件'
		},{
			vid:'p0918qdhft3',
			title:'大小新闻大事件'
		},{
			vid:'b0031gp84xn',
			title:'video'
		},{
			vid:'c0898tfcokc',
			title:'video'
		},{
			vid:'e0816ok9kfq',
			title:'video'
		},{
			vid:'f0701t219c8',
			title:'video'
		},{
			vid:'h0854tbemqm',
			title:'video'
		},{
			vid:'i08832ne4ea',
			title:'video'
		},{
			vid:'i0918bgrk2j',
			title:'video'
		},{
			vid:'n09183xhhar',
			title:'video'
		},{
			vid:'u0918slhvow',
			title:'video'
		}]
	},
  onTvpTimeupdate: function(){
  },
  onTvpPlay: function () {
  },
  onTvpPause: function () {
  },
  onTvpContentChange: function () {
  },
  onTvpStateChanage: function () {
  },
	onLoad(){
		this.videoContext = wx.createVideoContext('tvp');
	},
    onPicClick(e) {
        let dataset = e.currentTarget.dataset;
        this.currIndex=dataset.index
        this.setData({
            "currVideo.vid":dataset.vid
        })
        this.getTop()
    },
    getTop(){
        let query = this.createSelectorQuery();
        query.selectViewport().scrollOffset();
        query
            .selectAll(`.mod_poster`)
            .boundingClientRect()
            .exec(res => {
            let originTop = res[0].scrollTop;
            let currNode = res[1][this.currIndex];
            this.setData({
                top:currNode.top+originTop
            })
            });
    }
});
