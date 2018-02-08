<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<section id="benefits">
	<div class="wrapper" id="sidebar">
		<div class="container">
			<div class="inner_ben">
				<h2>Benefits</h2>
				<ul class="benefits_list">


						    <?php  dynamic_sidebar('sidebar-1'); ?>



							<?php  dynamic_sidebar('sidebar-2'); ?>




							<?php  dynamic_sidebar('sidebar-3'); ?>




							<?php  dynamic_sidebar('sidebar-4'); ?>

					
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="contacts_footer">
	<div class="wrapper">
		<div class="container">
			<div class="contacts_footer_inner">
				<ul class="cont_address">
					<li>
						<p class="cont_header">School Grant Farm</p>
						<ul class="details">
							<li>
								<p>PO Box 51158</p>
							</li>
							<li>
								<p>Durham,NC 27717</p>
							</li>
							<li>
								<p>artie@greatactivities.net</p>
							</li>
						</ul>
					</li>
					<li>
						<p class="cont_header"><br></p>
						<ul class="details">
							<li>
								<p></p>
							</li>
							<li>
								<p></p>
							</li>
							<li>
								<p></p>
							</li>
						</ul>
					</li>
					<li>
						<p class="cont_header">Get your Grant!</p>
						<ul class="details">
							<li>
								<p>Sign up for 30 days trial and get money for your program</p>
							</li>
						</ul>
					</li>
				</ul>
				<div class="trial_form">
					<form action="#">
						<input type="text" placeholder="Your name">
						<input type="email" placeholder="E-mail">
						<input type="password" placeholder="Password">
						<div class="trial_button">
							<a href="javascript:void(0)">Free 30-day trial</a>
						</div>
						<p>NO CREDIT CARD REQUIRED</p>
					</form>
				</div>
				<div class="social">
					<a href="#"><img src="<?php bloginfo('template_url'); ?>/img/facebook.png" alt=""></a>
					<a href="#"><img src="<?php bloginfo('template_url'); ?>/img/twitter.png" alt=""></a>
					<a href="#"><img src="<?php bloginfo('template_url'); ?>/img/in.png" alt=""></a>
				</div>
			</div>
		</div>
	</div>
</section>
<footer>
	<div class="wrapper">
		<div class="container">
			<div class="footer_inner">
				<div class="copyright">
					<p>School Grant Farm &copy; 2016</p>
				</div>
				<div class="sub_menu_place">
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
			</div>
		</div>
	</div>
</footer>
<div class="background"></div>
<div class="modal modal_log_in">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p>Log In</p>
	</div>
	<form action="#">
		<input type="email" placeholder="Username / E-mail">
		<input type="password" placeholder="Password">
		<a class="forgot" href="javascript:void()">Forgot password?</a>
		<a class="sign_up_modal" href="javascript:void(0)">Sign Up</a>
	</form>
</div>
<div class="modal modal_update_u_pass">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p class="update_text">Update your password</p>
		<p class="under_head">Enter you email address below in order to receive an email invite that will enable you to change your password</p>
	</div>
	<form action="#">
		<input type="email" placeholder="Your E-mail adress">
		<a class="submit" href="javascript:void(0)">Submit</a>
	</form>
</div>
<div class="modal modal_sign_in">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p class="update_text">Sign In</p>
	</div>
	<a class="sign_in_buttons individual_button" href="javascript:void(0);">Individual SignUp</a>
	<a class="sign_in_buttons school_button" href="javascript:void(0);">School SignUp</a>
	<a class="sign_in_buttons district_button" href="javascript:void(0);">District SignUp</a>
</div>
<div class="modal modal_individual_sign_up">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p>Individual Sign Up</p>
	</div>
	<form action="#">
		<input type="email" placeholder="E-mail">
		<input type="password" placeholder="Password">
		<input type="text" placeholder="First Name">
		<input type="text" placeholder="Last Name">
		<input type="text" placeholder="School Name">
		<input type="text" placeholder="State">
		<input type="text" placeholder="School Principal Name (First, Last)">
		<input type="email" placeholder="School Principal E-mail">
		<a class="sign_up_modal" href="javascript:void(0)">Sign Up</a>
	</form>
</div>

<div class="modal modal_district_sign_up">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p>District Sign Up</p>
		<p class="under_head">This will allow up to 6 individuals per district</p>
	</div>
	<form action="#">
		<input type="text" placeholder="Name of Person Filling Out (First Last)">
		<input type="email" placeholder="Person`s E-mail">
		<input type="text" placeholder="Person`s Work Phone Number">
		<input type="text" placeholder="School District Name">
		<input type="text" placeholder="School District Address">
		<input type="text" placeholder="City, State, Zip">
		<input type="email" placeholder="User E-mails (Allows up to 5 individual e-mails)">
		<input type="password" placeholder="Password (Allows up to 5 individual passwords)">
		<a class="sign_up_modal" href="javascript:void(0)">Sign Up</a>
	</form>
</div>

<div class="modal modal_school_sign_up">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p>School Sign Up</p>
		<p class="under_head">This will allow up to 5 individuals per school</p>
	</div>
	<form action="#">
		<input type="text" placeholder="Name of Person Filling Out Form (First Last)">
		<input type="email" placeholder="Person`s E-mail">
		<input type="text" placeholder="Principal`s Name (First Last)">
		<input type="text" placeholder="School Principal E-mail">
		<input type="text" placeholder="School Name">
		<input type="text" placeholder="City, State, Zip">
		<input type="email" placeholder="User E-mails (Allows up to 5 individual e-mails)">
		<input type="password" placeholder="Password (Allows up to 5 individual passwords)">
		<a class="sign_up_modal" href="javascript:void(0)">Sign Up</a>
	</form>
</div>

<!-- huinia -->
<div class="modal modal_school_info">
	<a class="close" href="javascript:void(0)"><img src="<?php bloginfo('template_url'); ?>/img/close.png" alt=""></a>
	<div class="modal_head">
		<p class="grant_name_header" id="grant_head">School Sign Up</p>
		<p class="under_head" id="grant_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius, doloribus voluptas aut. Non explicabo aliquam unde sequi qui assumenda natus modi magnam nihil. Quas suscipit possimus adipisci similique obcaecati!</p>

	</div>
</div>




<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>
	window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')
</script>
<script src="<?php bloginfo('template_url'); ?>/js/plugins.js"></script>
<script src="<?php bloginfo('template_url'); ?>/js/main.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
	(function (b, o, i, l, e, r) {
		b.GoogleAnalyticsObject = l;
		b[l] || (b[l] =
			function () {
				(b[l].q = b[l].q || []).push(arguments)
			});
		b[l].l = +new Date;
		e = o.createElement(i);
		r = o.getElementsByTagName(i)[0];
		e.src = 'https://www.google-analytics.com/analytics.js';
		r.parentNode.insertBefore(e, r)
	}(window, document, 'script', 'ga'));
	ga('create', 'UA-XXXXX-X', 'auto');
	ga('send', 'pageview');
</script>
</body>

</html>

