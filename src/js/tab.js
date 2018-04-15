(function($){
	//创建tab构造函数
	var Tab =function(tab){
		//获取菜单menu LI
		var aTabMenu = tab.find('.tab-menu a');
		// console.log(aTabMenu);

		//获取change
		var aChange = tab.find('.change');

		aTabMenu.click(function () {
			var index = $(this).index();

			//切换菜单
			aTabMenu.removeClass('active').eq(index).addClass('active');

			//切换菜单
			aChange.removeClass('frist').eq(index).addClass('frist');


		});

	};

	//注册成jQuery方法
$.fn.extend({
	tab:function(){
		this.each(function(k,v){
			new Tab($(v));
		});
	}
});

})(jQuery);