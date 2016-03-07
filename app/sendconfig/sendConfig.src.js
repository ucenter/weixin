/**
 * Created by xsl on 2016/2/29.
 */
/*
function callback(data){
    var arrD=data.split('-');
    this.dateControl.innerHTML='<em class="date-year">'+arrD[0]+'</em>年<em class="date-month">'+arrD[1]+'</em>月';
    initWeek(arrD);
}
*/

/*
* years年份 months月份 startDate开始日期（2016-03-3） endDate结束日期如(2016-08-15)
* */
function initWeek(years,months,startDate,endDate){
    var chooseDiv=$('.choose-tbd');
    chooseDiv.html('');
    var ssdate=new Date(years,months,0);
    var week=1;
    var datas= ssdate.getDate();
    var startMonth=1,startDay= 0,endMonth=12,endDay=datas;
    if(startDate!=null){
        startMonth=startDate.split('-')[1];
        if(startMonth==months){
            startDay=startDate.split('-')[2];
        }
    }
    if(endDate!=null){
        endMonth=endDate.split('-')[1];
        if(endMonth==months){
            endDay=endDate.split('-')[2]
        }
    }
    for(var i =startDay ; i< endDay ; i++){
        week=(new Date(years, parseInt(months-1),i+1)).getDay();
        if(week==2&&(i+3)<=datas){
            chooseDiv.html(chooseDiv.html()+'<li class="tab-td"><span class="tab-btn choose">'+months+'月'+(i+1)+'日</span></li> <li class="tab-td"><span class="tab-btn choose">'+months+'月'+(i+4)+'日</span></li><li class="split-line"></li>');
            i=i+4;
        }else if(week==2){
            chooseDiv.html(chooseDiv.html()+'<li class="tab-td"><span class="tab-btn choose">'+months+'月'+(i+1)+'日</span></li> <li class="tab-td"></li>');
        }else if(week==5){
            chooseDiv.html(chooseDiv.html()+'<li class="tab-td"></li> <li class="tab-td"><span class="tab-btn choose">'+months+'月'+(i+1)+'日</span></li><li class="split-line"></li>')
        }

    }
}
$(function(){
    var startDate='2016-03-3';
    var endDate='2016-08-15';
    var minMonth=1,maxMonth=12;
    minMonth=startDate.split('-')[1];
    maxMonth=endDate.split('-')[1];
    initWeek(2016,3,startDate,endDate);
    $('#arrowLeft').bind('click',function(e){
        var year=$('.date-year').text();
        var month=parseInt($('.date-month').text());
        if(month<=minMonth){
            month=minMonth;
        }else{
            month--;
        }
        $('.date-month').html(month)
        initWeek(year,month,startDate,endDate);

    });
    $('#arrowRight').bind('click',function(e){
        var year=$('.date-year').text();
        var month=parseInt($('.date-month').text());
        if(month>=parseInt(maxMonth)){
            month=maxMonth;
        }else{
            month++;
        }
        $('.date-month').html(month)
        initWeek(year,month,startDate,endDate);

    });
    $('.all-cancel').bind('click',function(e){
       var $cancel=$('span.choose');
        if($cancel.length>0){
            for(var i=0;i<$cancel.length;i++){
                $cancel[i].className='tab-btn cancel';
            }
        }
    });

    $('.all-choose').bind('click',function(e){
        var $cancel=$('span.cancel');
        if($cancel.length>0){
            for(var i=0;i<$cancel.length;i++){
                $cancel[i].className='tab-btn choose';
            }
        }
    });

    $('.choose-tbd').on('click','.tab-btn',function(e){
        var className=this.className;
        if(className.indexOf('cancel')==-1){
            this.className='tab-btn cancel';
        }else{
            this.className='tab-btn choose';
        }
    });

});