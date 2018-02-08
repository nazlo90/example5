<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<?php the_post();?>
<section id="for_ind">
	<div class="wrapper">
		<div class="container">
			<div class="section_header">
				<h1><?php the_title();?></h1>
			</div>
			<div class="description_box">
				<div class="together text_side blog">
					<div class="blog_side_wrap">
						<div class="text_side_header">
							<h3></h3>
						</div>
						<div class="blog_date">
							<p><?php the_date('F j,Y'); ?></p>
						</div>
						<div class="blog_photo">
							<img src="<?php the_post_thumbnail_url(); ?>" alt="">
						</div>
						<div class="text_side_content">
							<?php the_content(); ?>
						</div>
						<div class="navigation">
							<a class="navi_post prev" href="javascript:void(0);">Previous post</a><?php
							//get_permalink( get_adjacent_post(false,'',true)->ID );

							?>
							<div class="share">
								<p>Share:</p>
								<a href="#"><img class="fb" src="<?php bloginfo('template_url'); ?>/img/fb_green.png" alt=""></a>
								<a href="#"><img class="tw" src="<?php bloginfo('template_url'); ?>/img/tw_green.png" alt=""></a>
							</div>
							<a class="navi_post next" href="javascript:void(0);">Next post</a><?php
							//get_permalink( get_adjacent_post(false,'',false)->ID );
							?>
						</div>
						<div class="disqus">
							<div class="disqus_tabs">
								<div class="left_side">
									<a href="javascript:void(0);" class="count_of_comments"><span class="number">26</span> Comments</a>
									<a href="javascript:void(0);" class="mail_gun">Mailgun Blog</a>
								</div>
								<div class="right_side">
									<!--<select name="" id="">
                                        <option value="" selected>Login</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>-->
									<!--<div class="select_main">
                                        <p class="baf spec_value"></p>
                                        <select name="" id="tine_width" class="version_pledge">
                                            <option value="" selected>Login</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </div>-->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="together lets_start_side">
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
