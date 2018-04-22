<?php

/**
 * The file defines global constants for the plugin
 *
 * @link       http://imtiazrayhan.com/
 * @since      1.0.2
 *
 * @package    Ultimate_Blocks_Constants
 * @subpackage Ultimate_Blocks/includes
 */

/**
 * The core plugin class.
 *
 * This is used for defining constants which are used throughout plugin.
 *
 * @since      1.0.2
 * @package    Ultimate_Blocks_Constants
 * @subpackage Ultimate_Blocks_Constants/includes
 * @author     Imtiaz Rayhan <imtiazrayhan@gmail.com>
 */
class Ultimate_Blocks_Constants {

	protected const PLUGIN_VERSION = '1.0.2';

	protected const PLUGIN_NAME = 'ultimate-blocks';

	protected const PLUGIN_PATH = WP_PLUGIN_DIR . '/' . self::PLUGIN_NAME . '/';

	/**
	 * Get Plugin version
	 *
	 * @return string
	 */
	public static function plugin_version() {
		return self::PLUGIN_VERSION;
	}

	/**
	 * Get Plugin name
	 *
	 * @return string
	 */
	public static function plugin_name() {
		return self::PLUGIN_NAME;
	}

	/**
	 * Get Plugin URL
	 *
	 * @return string
	 */
	public static function plugin_path() {
		return self::PLUGIN_PATH;
	}

	/**
	 * Get Plugin URL
	 *
	 * @return string
	 */
	public static function plugin_url() {
		return plugin_dir_url( dirname( __FILE__ ) );
	}
}