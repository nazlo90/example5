<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<section id="for_ind">
	<div class="wrapper">
		<div class="container">
			<div class="section_header">
				<h1>School Grant Farm Blog</h1>
			</div>
			<div class="description_box">
				<div class="together text_side blog">
			<?php	if (have_posts())
{
	while (have_posts())
	{the_post();?>
		<div class="blog_side_wrap">
			<div class="text_side_header">
				<h3><?php the_title(); ?></h3>
			</div>
			<div class="blog_date">
				<p><?php the_date('F j,Y'); ?></p>
			</div>
			<div class="blog_photo">
				<img src="<?php the_post_thumbnail_url(); ?>" alt="">
			</div>
			<div class="text_side_content">
				<?php	the_content( 'Read more ...' ); ?>
			</div>
			<div class="blog_buttons">
				<a href=" <?php the_permalink(); ?> " class="read_more">Read more</a>
				<div class="share">
					<p>Share:</p>
					<a href="#"><img class="fb" src="<?php bloginfo('template_url'); ?>/img/fb_green.png" alt=""></a>
					<a href="#"><img class="tw" src="<?php bloginfo('template_url'); ?>/img/tw_green.png" alt=""></a>
				</div>
			</div>
		</div>

	<?php }}
?>
</div>
<div class="together lets_start_side">
	<div class="search"><input type="text" placeholder="Search"></div>
	<div class="lets_start_inner">
		<p class="lets_start_head">Let's Start</p>
		<p class="under_header">right now</p>
		<a href="javascript:void(0);" class="free_trial">Free 30-day trial</a>
		<p class="no_required">No credit card required!</p>
	</div>
</div>
</div>

</div>
</div>
</section>
