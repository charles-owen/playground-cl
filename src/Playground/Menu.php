<?php
/**
 * @file
 * Top-level Playground menu
 */

namespace CL\Playground;

use CL\Site\Site;
use CL\Playground\Action\Action;

/**
 * Playground menus and menu items
 *
 * @cond
 * @property Action action
 * @endcond
 */
class Menu {

	public function __construct($name) {
		$this->name = $name;
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
			case 'action':
				return $this->action;

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
			case 'action':
				$this->action = $value;
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
	 * Create data suitable for sending to the client.
	 * @param Site $site the Site object
	 * @return array
	 */
	public function data(Site $site) {


		$data = [
			'name' => $this->name
		];

		if(count($this->menus) > 0) {
			$menuData = [];
			foreach($this->menus as $menu) {
				$menuData[] = $menu->data($site);
			}

			$data['menus'] = $menuData;
		}

		if($this->action !== null) {
			$data['action'] = $this->action->data($site);
		}

		return $data;
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


	private $name;
	private $action = null;
	private $menus = [];
}