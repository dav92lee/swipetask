// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {




	//strikeout function
	tasks = $('.task_ul_li');

	for (i=0; i< tasks.length; i++){
		if ($('li:eq('+i+')').find('#task-info').find('#task-edit').find('.task-cbox').is(":checked")){
			$('li:eq('+i+')').find('#task-info').find('#task-name').css("text-decoration", "line-through");

		}
	};


	//tweet
	$(".task-tweet").bind('change', function(){
		console.log("FJDAKLFJKLDJFK!!!");
		$.ajax({
	      url: '/tasks/'+this.value+'/tweettask',
	      type: 'POST',
	      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
	      data: {"completed": this.checked}
	    });
	});


	//check completed
	$(".task-cbox").bind('change', function(){
	  
	  if (this.checked){
	  	//db code
	    $.ajax({
	      url: '/tasks/'+this.value+'/toggle',
	      type: 'POST',
	      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
	      data: {"completed": this.checked}
	    });

	    //front end code
	    $(this).parent().parent().find('#task-name').css("text-decoration", "line-through");
	  }
	  else {
	  	//db code
	  	$.ajax({
	      url: '/tasks/'+this.value+'/toggle',
	      type: 'POST',
	      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
	      data: {"completed": this.checked}
	    });

	    //front end code

	    $(this).parent().parent().find('#task-name').css("text-decoration", "none");
	  }
	});


	//click function

	tasks.click(function() { 

		if($(this).hasClass('active') == true) {

		}else{
			$('.active').find('#task-edit').css("display", "none");
			$('.active').removeClass('active');
			$(this).addClass('active');
			$(this).find('#task-edit').css("display", "inline-block");	
		}
	});
			



});




