<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<!doctype html>
<html class="no-js" >

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<!-- Place favicon.ico in the root directory -->

	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/normalize.css">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/main.css">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/header.css">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/footer.css">
	<script src="<?php bloginfo('template_url'); ?>/js/vendor/modernizr-2.8.3.min.js"></script>
</head>



<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Add your site or application content here -->

<header>
	<div class="wrapper">
		<div class="container">
			<div class="header_place">
				<div class="logo_place">
					<a href="/"><img src="<?php bloginfo('template_url'); ?>/img/logo.png" alt=""></a>
				</div>
				<div class="menu_place">
					<ul class="menu_details">
						<li><a href="for_individuals.html">For Individuals</a></li>
						<li><a href="for_schools.html">For Schools</a></li>
					</ul>
					<ul class="menu_about">
						<li><a href="blog.html">Blog</a></li>
						<li><a href="faq.html">FAQ</a></li>
						<li><a href="about.html">About us</a></li>
					</ul>
				</div>
				<div class="<?php if ( !is_user_logged_in()) echo 'sign_place'; else "menu_place";?>">
					<ul>
						<li class="<?php if ( !is_user_logged_in()) echo 'log_in'; else "menu_about";?>"><a href="<?php if ( is_user_logged_in()) echo '/test/my_ledger'; ?>"><?php if ( is_user_logged_in()) echo 'My ledger'; else echo "Log In"?></a></li>
						<li class="<?php if ( !is_user_logged_in()) echo 'sign_up'; else "menu_about"; ?>"><a href="javascript:void(0);"><?php if ( is_user_logged_in()) echo 'Log Out'; else echo "Sign up";?></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</header>

<?php wp_head(); ?>