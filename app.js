/* Nano Templates - https://github.com/trix/nano */
function nano(template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  });
}

function loadedPanel(what) {
    //We are going to set the badge as the number of li elements inside the target
    $.ui.updateBadge("#aflink", $("#af").find("li").length);
    var id = what.id;
    var panel = document.getElementById(id);
    $.ajax({url: 'tpl/'+id+'.html'}).then(function(res){
    	$(panel).empty().append(res);
    })
}

//首页内容加载
function mainPanel(panel){
	console.log(panel.id)
	$.ajax({url: 'tpl/main.html'}).then(function(res){
		$('#main').empty().append(res);
	});		
}

//地址列表页内容
function addressListPanel(){
	$.ajax({
		url:'tpl/addresslist.html'
	}).then(function(res){
		$('#addressList').empty().append(res)
	},function(){})
}

function editAddress(){
	$.ajax({
		url: 'tpl/editaddress.html',
	}).then(function(res){
		$('#editAddress').empty().append(res);
	})
}

//口味页面加载
function vegListPanel(){
	$.ajax({url: 'tpl/veglist.html'}).then(function(res){
		$('#veglist').empty().append(res)
	},function(){
		console.log('vegListPanel loading error');
	});
}


function menuPanel(){
	$.ajax({
		url: 'tpl/menu.html'
	}).then(function(res){
		$('#menuPanel').empty().append(res)
	},function(){
		console.log('vegListPanel loading error');
	});	
}

function sendConfigPanel(){
	$.ajax({url: 'app/sendconfig/sendconfig.html'}).then(function(res){
		$('#sendConfig').empty().append(res)
	},function(){
		console.log('sendConfigPanel load error');
	});
}

function subpanel(){
	$.ajax({url: 'tpl/subpanel.html'}).then(function(res){
		$('#subPanel').empty().append(res)
	});
}


//UI准备完成
$.ui.ready(function(){
	console.log('ui ready');


	// TouchSlide({ 
	// 	slideCell:"#focus",
	// 	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	// 	mainCell:".bd ul", 
	// 	effect:"leftLoop", 
	// 	autoPlay:true,//自动播放
	// 	autoPage:true //自动分页
	// });

});

