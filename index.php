<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
//add_action( 'wp_ajax_school_PA_get_desc', 'school_PA_get_desc' );
get_header(); ?>

	<?php
			if ( is_front_page() && is_home() ) {
			// Default homepage
				get_template_part( 'content', 'none' );
		  } elseif ( is_front_page() ) {
			// static homepage
			//	echo "static";
			}
			elseif ( is_home() ) {
		//============================================================================
				get_template_part( 'template-parts/content', 'home' );
					} else {
				get_template_part( 'template-parts/content', 'else' );
			//everything else
				?> 
				<?php 		}	?>


<?php get_sidebar(); ?>
<?php get_footer(); ?>
