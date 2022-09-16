<?php
/**
 * @file
 * PHP representation of the playground
 */

namespace CL\Playground;

use CL\Site\Site;
use CL\Site\ViewAux;
use CL\Site\View;
use CL\Users\User;
use CL\Course\Member;
use CL\FileSystem\FileSystem;

use CL\Playground\Tab\Tab;

/**
 * PHP representation of the playground
 *
 * @cond
 * @property string height
 * @property string display
 * @property Pane pane
 * @endcond
 */
class Playground {

	/**
	 * Playground constructor.
	 */
	public function __construct() {
		$this->pane = new Pane();
	}


	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'display':
				return $this->display;

			case 'pane':
				return $this->pane;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'display':
				$this->display = $value;
				break;

			case 'height':
				$this->height = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Add a sub menu
	 * @param string $name Name that appears for the menu
	 * @return Menu object
	 */
	public function addMenu($name) {
		$menu = new Menu($name);
		$this->menus[] = $menu;
		return $menu;
	}

	/**
	 * Present the playground div in a view.
	 * @param Site $site The site object
	 * @param User $user Current user
	 * @param string|null $class Optional class to add to the div
	 * @return string HTML
	 */
	public function present(Site $site, User $user, $class='') {

		$data = $this->data($site);

		if($class !== null && strlen($class) > 0) {
			$class = ' ' . $class;
		}

		$payload = htmlspecialchars(json_encode($data), ENT_NOQUOTES);

		return '<div class="cl-playground' . $class . '">' . $payload . '</div>';
	}


	/**
	 * Construct data for sending to the client
	 */
	public function data(Site $site) {
		$menuData = [];
		foreach($this->menus as $menu) {
			$menuData[] = $menu->data($site);
		}

		$data = [
			'pane' => $this->pane->data(),
			'menus' => $menuData
		];

		$this->optional($data, 'height', $this->height);
		$this->optional($data, 'load', $this->load);



		return $data;
	}

	/**
	 * Load the playground with data from the file system.
	 * @param Site $site The site object
	 * @param User $user User we are loading for
	 * @param string $appTag Application tag for the file system
	 * @param string $name File system name
	 */
	public function load(Site $site, User $user, $appTag, $name) {
		$fileSystem = new FileSystem($site->db);
		$load = $fileSystem->readText($user->id, $user->member->id, $appTag, $name);
		if($load !== null) {
			$this->load = $load['data'];
		}
	}

	private function optional(array &$data, $name, $value) {
		if($value !== null) {
			$data[$name] = $value;
		}
	}


	private $display = 'window';
	private $height = null;
	private $pane;
	private $menus = [];
	private $load = null;
}
