$(document).ready(function () {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    var window_width = $(window).outerWidth();
    var window_height = $(window).outerHeight();
    if (window_width < 1349) {
        //$('.container').width(window_width);
        $('#video_cont').css({
            'width': window_width
            , 'height': window_width / 2.05
            , 'background-size': 'contain'
        });
        $(window).resize(function () {
            var main_width = $(window).outerWidth();
            //$('.container').width(window_width);
            $('#video_cont').css({
                'width': window_width
                , 'height': window_width / 2.05
            });
        });
    }
    else {
        $('#video_cont').css({
            'background-size': 'cover'
        });
    }
    $(window).resize(function () {
        var window_width = $(window).outerWidth();
        var window_height = $(window).outerHeight();
        if (window_width < 1349) {
            //$('.container').width(window_width);
            $('#video_cont').css({
                'width': window_width
                , 'height': window_width / 2.05
                , 'background-size': 'contain'
            });
            $(window).resize(function () {
                var main_width = $(window).outerWidth();
                //$('.container').width(window_width);
                $('#video_cont').css({
                    'width': window_width
                    , 'height': window_width / 2.05
                });
            });
        }
        else {
            $('#video_cont').css({
                'background-size': 'cover'
            });
        }
    });
    var document_height = $(document).outerHeight();
    $('.background').css({
        'height': document_height
    });


    
    
    //$(".modal").click(function(o){o=o||event,target=o.target||o.srcElement,"modal_wrap"!==target.className&&($(".background").hide(),$(".modal").hide())});
    
    $('.modal_info').click(function(){
        $('.background').css({
            'display': 'flex'
        });
        $('.modal_school_info').css({
            'display': 'flex'
        });
        console.log($(this).closest('.grant_name'));
        var get_grant_name = $(this).parents('td').find('.grant_name').text();

        $('#grant_head').html("ggg");
        console.log($('#grant_head').text());

      /*  $.ajax({S
            url: '/test/my_ledger',
            data: 'state=get_grant_desc&grant_id=' + $(this).attr('dataid'),
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                //$('.under_head').html(res);
                console.log(result);
            }

        })*/

        //$("[id^='grant_id']").attr('id').substr(8)
        var get_grant_text = $(this).parents('td').find('input').val();

        $('#grant_desc').html('get_grant_text');
        console.log($('#grant_desc').text());
        console.log($('.modal_documents').text());

    });
    
    $('.upload_doc').click(function () 
    {
        $.ajax({
            url  : ajaxurl,
            data : 'action=getfiles&grant_id='+$(this).attr('grant_id'),
            type : 'post',
            dataType: 'json',
            success: function(res){
                if(res.files)
                {
                    $('#add-docs').html('');
                    var html = '';
                    for(var key in res.files)
                    {
                        var curres = res.files[key];
                        html += '<li class="list_doc"><p class="under_head"><a target="_blank" href="'+curres['href']+'">'+curres['text']+'</a></p></li>';
                    }
                    $('#add-docs').html(html);
                    console.log($('.background'));
                    $('.background').css({
                        'display': 'flex'
                    });
                    $('.modal_documents').css({
                        'display': 'flex'
                    });
                }
            }
        })
       
        //$(this).next('.to_img').click();
    });
    
    var log_in = $('.log_in');
    var close = $('.close');
    $('.background').click(function () {
        $('.background').css({
            'display': 'none'
        });
        $('.modal').css({
            'display': 'none'
        });
    });
    $('.close').click(function () {
        $('.background').css({
            'display': 'none'
        });
        $('.modal').css({
            'display': 'none'
        });
    });
    $('.log_in').click(function () {
        $('.background').css({
            'display': 'flex'
        });
        $('.modal_log_in').css({
            'display': 'flex'
        });
    });
    $('.forgot').click(function () {
        $('.modal_log_in').css({
            'display': 'none'
        });
        $('.modal_update_u_pass').css({
            'display': 'flex'
        });
    });
    /*$('.sign_up').click(function(){ 
            $('.background').css({'display': 'block'}); 
            $('.modal_sign_in').css({'display': 'block'}); 
        }); */
        $('.sign_up, .free_trial').click(function(){ 
            $('.background').css({'display': 'flex'}); 
            $('.modal_sign_in').css({'display': 'none'}); 
            $('.modal_individual_sign_up').css({'display': 'flex'}); 
        }); 
        /*$('.school_button').click(function(){ 
            $('.background').css({'display': 'block'}); 
            $('.modal_sign_in').css({'display': 'none'}); 
        $('.modal_school_sign_up').css({'display': 'block'}); 
        }); 
        $('.district_button').click(function(){ 
            $('.background').css({'display': 'block'}); 
            $('.modal_sign_in').css({'display': 'none'}); 
        $('.modal_district_sign_up').css({'display': 'block'}); 
    });*/
    
    var list_height = $('.text_side').outerHeight();
    
    if (list_height < 320) {
        $('.lets_start_side').css({
            'height': 'auto'
            , 'margin-bottom': '30px'
        });
    }
    if (window_width < 815) {
        $('.lets_start_side').find('.m_top').clone().appendTo($('.comment').prev());
        $('.lets_start_side').find('.m_top').hide();
    }
    else if (window_width > 815) {
        $('.text_side').find('.m_top').remove();
        $('.lets_start_side').find('.m_top').show();
    }
    
    $(window).resize(function () {
        if (list_height < 320) {
            $('.lets_start_side').css({
                'height': 'auto'
                , 'margin-bottom': '30px'
            });
        }
        if (window_width < 815) {
            $('.lets_start_side').find('.m_top').clone().appendTo($('.comment').prev());
            $('.lets_start_side').find('.m_top').hide();
        }
        else if (window_width > 815) {
            
            $('.text_side').find('.m_top').remove();
            $('.lets_start_side').find('.m_top').show();
        }
    });

    $('.type_of_ancor').mouseover(function(e){
        data_show = $(e.target).attr('data-toogle');
        $('.f_a_q.blog_side_wrap').css('display','none');
        $('.f_a_q.blog_side_wrap[data-faq='+data_show+']').css('display','block');
    })
    /*----------------------Comments----------------------*/

    $('select.version_pledge').each(function () {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
    $('select.version_pledge').change(function () {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
    
    $('.question_box a').mouseover(function(e){
        data_ancor = $(e.target).attr('data-ancor');
        $('.to_change').css('display','none');
        $('.to_change[data-comment='+data_ancor+']').css('display','block');
    });
    
    
/*    $('.sort').click(function () {
        if ($(this).hasClass('sort')) {
            $(this).removeClass('sort');
            $(this).addClass('sorted')
        }
        else {
            $(this).removeClass('sorted');
            $(this).addClass('sort')
        }
    });*/
    //$('#map').usmap({});
    if($('#map').length){
        $('#map').usmap({
            // The click action
            click: function (event, data) {
                 $.ajax({
                    url:     ajaxurl, 
                    data:    'action=setstate&state='+data.name,
                    type:    'POST',
                    success: function(response){
                        //$('input[name=selected-state]').val(response);
			window.location.href = response;
                    }
                });
                
                $('#clicked-state').text('You choose: ' + data.name).parent().effect('highlight', {
                    color: '#C7F464'
                }, 2000);

            }
        });

    }
    
    $('.social-likes__widget .social-likes__button_facebook').text('');
    $('.social-likes__widget .social-likes__counter social-likes__counter_facebook social-likes__counter_empty').remove();
    $('.social-likes__widget .social-likes__icon social-likes__icon_twitter').remove();
    $('.social-likes__widget .social-likes__button.social-likes__button_twitter').text('');
});
