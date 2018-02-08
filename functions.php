<?php 
add_theme_support( 'post-thumbnails' );

function register_theme_sidebar()
{

    register_sidebar(array(
        'name' => 'sidebar-1',
        'id' => 'sidebar-1',
        'description' => '1 column',
        'before_widget' => '<li>',
        'after_widget' => '</li>',
        'before_title'=>'',
        'after_title'=>'',
    ),
        array(
            'before_widget' => '',
            'after_widget' => '',

        )
    );
    register_sidebar(array(
        'name' => 'Sidebar-2',
        'id' => 'sidebar-2',
        'description' => '2 column',
        'before_widget' => '<li>',
        'after_widget' => '</li>',
    ));
    register_sidebar(array(
        'name' => 'Sidebar-3',
        'id' => 'sidebar-3',
        'description' => '3 column',
        'before_widget' => '<li>',
        'after_widget' => '</li>',
    ));
    register_sidebar(array(
        'name' => 'Sidebar-4',
        'id' => 'sidebar-4',
        'description' => '4 column',
        'before_widget' => '<li>',
        'after_widget' => '</li>',
    ));

}

add_action('widgets_init', 'register_theme_sidebar');

