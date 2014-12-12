$(document).ready(function(){

var buname=false;
var bpwd=false;
unlock();

$("#username").change(function(){
    unlock();
});
$("#password").change(function(){
    unlock();
});

function unlock(){
  if (buname == true && bpwd == true){
      $("input[type=submit]").removeAttr("disabled");
  }else{
      $("input[type=submit]").attr("disabled","disabled");
  }  
}



$("#username").on('focusout',function() {
  var uname = this.value;
  //validate username field
  var invalid_msg = "<span class='uname_fail' style='color:red;'> * The Username has a minimum length of 5 characters and only accept alpha-number only</span>";
  if ( uname.length < 5 || uname != uname.match(/^[0-9a-zA-Z]+$/)){
      $(".username").append(invalid_msg);
  }else{
      buname = true;
  }
  //check if username has been registered
  var repeat_msg = "<span class='uname_repeat' style='color:red;'> * The Username has already registered.</span>";
  var udata = new Array();
  udata.push({ name: "uname", value: uname});

  console.log(udata);
  $.ajax({
        url: '/TestProj/Controller?action=checkuname&uname='+uname,
    	type: 'POST',
    	dataType: 'json',
    	data: udata,
        //contentType:'application/json, charset=utf-8',
        success: function(data){
            checkstatus = data.status;
            
            if (checkstatus != 'true'){
                console.log(data.status);
                $(".username").append(repeat_msg);
            }
        },
        error: function(x,y,z){ console.log(JSON.stringify(x)); }
	});
});

$("#username").on('focus',function(){
    $('.uname_fail').remove();
    $('.uname_repeat').remove();
});


$("#password").on('focusout',function() {
  var upwd = this.value;
  var msg = "<span class='pass_fail' style='color:red'> * The password has a minimum length of 8 characters and contains at least 1 number, 1 uppercase, and 1 lowercase character";
  if ( upwd != upwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
      $(".password").append(msg);
  }else{
      bpwd = true;
  }
});

$("#password").on('focus',function(){
    $('.pass_fail').remove();
});

$(".submit-btn").on('submit',function(event){
    var password = $('#password').value;
    var uname = $('#username').value;
    var rdata = new Array();
    rdata.push({ name: "uname", value: uname},{name: "pwd", value: password});
    $.ajax({
        url: '/TestProj/Controller?action=register&uname='+uname+'&pwd='+password,
        type: 'POST',
        datatype: 'json',
        success: function(data){
            checkstatus = data.status;
            alert(data.status);
                console.log(data.status);
             
        },
        error: function(x,y,z){ 
            alert(JSON.stringify(y));
            console.log(JSON.stringify(x)); }
	});
        
        
    });
    
    
});