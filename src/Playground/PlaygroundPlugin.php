<?php
/**
 * @file
 * Plugin that adds the Playground IDE to the system.
 */

/// Classes in the Playground subsystem
namespace CL\Playground;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Router;

/**
 * Plugin that adds server-side support for Playground IDE to a course.
 */
class PlaygroundPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'playground';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {

	}

}