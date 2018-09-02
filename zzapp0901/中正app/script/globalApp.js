(function() {
    globalData = {
        baseUrl: "http://47.92.201.67:7080/missy/",
        getCode: "getCode", //获取手机验证码
        toLogin: "login/toLogin", //登录
        toRegist: "toRegist", //注册
        getUserById: "user/getUserById", //用户个人中心
        getUserDetailById: "user/getUserDetailById", //获取用户详情
        updatePassword: "user/updatePassword", //根据id修改用户密码
        updateUserInfoById: "ser/updateUserInfoById", //根据id修改用户信息
        getRewardDetailList: "reward/getRewardDetailList", //获取赏单列表详情
        getRewardList: "reward/getRewardList", //获取赏单列表

        getTaskByUser: "reward/getTaskByUser", //用户领取任务 status 1:领取成功 2：领取失败 3：任务已领完 4:赏单不存在 5:赏单已过期 6:领取任务次数上限
        publishReward: "reward/publishReward", //新增赏单与赏单步骤
    };
})();