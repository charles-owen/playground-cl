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


	public function data(Site $site) {
		$data = [
			'name' => $this->name
		];

		if($this->action !== null) {
			$data['action'] = $this->action->data($site);
		}

		return $data;
	}

	private $name;
	private $action = null;
}