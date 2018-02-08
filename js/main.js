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
    var modal_height = $('.modal_log_in').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_log_in').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_log_in').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.modal_update_u_pass').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_update_u_pass').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_update_u_pass').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.modal_sign_in').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_sign_in').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_sign_in').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.modal_individual_sign_up').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_individual_sign_up').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_individual_sign_up').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.modal_district_sign_up').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_district_sign_up').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_district_sign_up').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.modal_school_sign_up').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_school_sign_up').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_school_sign_up').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    var modal_height = $('.was_added_to_ledger').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.was_added_to_ledger').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.was_added_to_ledger').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    
    var modal_height = $('.modal_school_info').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_school_info').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_school_info').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    
    var modal_height = $('.modal_documents').outerHeight();
    console.log(window_height);
    console.log(modal_height);
    $('.modal_documents').css({
        'top': (window_height - modal_height) / 2
    });
    $(window).resize(function () {
        var window_height = $(window).outerHeight();
        /*console.log(window_height);
        console.log(modal_height);*/
        $('.modal_documents').css({
            'top': (window_height - modal_height) / 2
        });
        console.log((window_height - modal_height) / 2);
    });
    
    $('.modal_info').click(function(){
        $('.background').css({
            'display': 'block'
        });
        $('.modal_school_info').css({
            'display': 'block'
        });
        var get_grant_name = $(this).closest('.grant_name').text();
        $('.grant_name_header').text(get_grant_name);



        $.ajax({
        url: '/wp-admin/admin-ajax.php',
            data : 'action=school_PA_get_desc&state=get_grant_desc&grant_id=' + $(this).attr('dataid'),
            datatype:'text',
            type: 'POST',
            success: function (result) {
            $('.under_head').html(result);

           // console.log(result);
        }

    });



    });

        
    $('.upload_doc').click(function () {
        $('.background').css({
            'display': 'block'
        });
        $('.modal_documents').css({
            'display': 'block'
        });
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
            'display': 'block'
        });
        $('.modal_log_in').css({
            'display': 'block'
        });
        $('.forgot').click(function () {
            $('.modal_log_in').css({
                'display': 'none'
            });
            $('.modal_update_u_pass').css({
                'display': 'block'
            });
        });
    });
    /*$('.sign_up').click(function(){ 
            $('.background').css({'display': 'block'}); 
            $('.modal_sign_in').css({'display': 'block'}); 
        }); */
        $('.sign_up, .free_trial').click(function(){ 
            $('.background').css({'display': 'block'}); 
            $('.modal_sign_in').css({'display': 'none'}); 
            $('.modal_individual_sign_up').css({'display': 'block'}); 
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
        var temp=$(this).children('option:selected').text();
        if (temp!='Denied') {$("input[id='"+$(this).attr('grant_order_id')+"']").prop('disabled',false);} else $("input[id='"+$(this).attr('grant_order_id')+"']").prop('disabled',true) ;

    });
    $('select.version_pledge').change(function () {
        $(this).siblings('p').text($(this).children('option:selected').text());

        if ($(this).children('option:selected').text()!='Denied') {

            $("input[id='"+$(this).attr('grant_order_id')+"']").prop('disabled',false);
            $("input[id='"+$(this).attr('grant_order_id')+"']").prop('value','0');
            var total=0;
            $( 'input.ammount' ).each(function() {
                total+=parseInt($(this).prop('value'));
            });
            $( 'td.total' ).text('$'+total);
        } else {$("input[id='"+$(this).attr('grant_order_id')+"']").prop('disabled',true) ;$("input[id='"+$(this).attr('grant_order_id')+"']").prop('value','0');
            var total=0;
            $( 'input.ammount' ).each(function() {
                total+=parseInt($(this).prop('value'));
            });
            $( 'td.total' ).text('$'+total);
        }

        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            data : 'action=school_PA_get_accepted&grant_order_id=' + $(this).attr('grant_order_id'),
            datatype:'text',
            type: 'POST',
            success: function (result) {
                //$('.under_head').html(result);
                //$(this).siblings('p').text('result');
                // console.log(result);
            }

        });





    });

    $('input.ammount').blur(
        function()
        {
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                data :'action=school_PA_get_received&grant_order_id=' + $(this).attr('id')+'&val='+$(this).prop('value'),
                datatype:'text',
                type: 'POST',
                success: function (result) {
                    //$('.under_head').html(result);
                    $(this).prop('value',result);
                    // console.log(result);
                }

            });
          //  $(this).attr('id'));
            var total=0;
            $( 'input.ammount' ).each(function() {
                total+=parseInt($(this).prop('value'));
            });
            $( 'td.total' ).text('$'+total);
        }
        
    );

    $('img.garbage').click(
        function()
        {

            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                data :'action=school_PA_delete&grant_order_id='+$(this).attr('id'),
                datatype:'text',
                type: 'POST',
                success: function (result) {

                    $('article.post-8').html(result);

                }

            });
            //  $(this).attr('id'));

        }

    );
    $('img.myledger').click(
        function()
        {

            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                data :'action=school_PA_add&id='+$(this).attr('id'),
                datatype:'text',
                type: 'POST',
                success: function (result) {
                window.location.href='/my_ledger';


                }

            });
            //  $(this).attr('id'));

        }

    );

    $('.question_box a').mouseover(function(e){
        data_ancor = $(e.target).attr('data-ancor');
        $('.to_change').css('display','none');
        $('.to_change[data-comment='+data_ancor+']').css('display','block');
    });
    
    
    $('.sort').click(function () {
        if ($(this).hasClass('sort')) {
            $(this).removeClass('sort');
            $(this).addClass('sorted')
        }
        else {
            $(this).removeClass('sorted');
            $(this).addClass('sort')
        }
    });
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
