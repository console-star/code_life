export const option = {
    color: ['#f35e3d','#ffdb5c', '#ffa356', '#ec1614'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid : {
        top : -100,    //距离容器上边界40像素
        bottom: 20   //距离容器下边界30像素
    },
//  legend: {
//  	orient:'horizontal',
//  	itemWidth: 10,
//      itemHeight: 10,
//      itemGap: 10,
//      x: 'center',
//      data:['待收本金','邮件营销','联盟广告','视频广告'],
//  },
    series: [
        {
            name:'类型',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'待收本金¥'},
                {value:310, name:'账户余额¥'},
                {value:234, name:'待收利息¥'},
                {value:135, name:'冻结金额¥'}
            ]
        }
    ]
}