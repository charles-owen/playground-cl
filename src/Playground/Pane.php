<?php
/**
 * @file
 * Representation of a single pane in the playground
 */

namespace CL\Playground;

use CL\Playground\Tab\Tab;

/**
 * Representation of a single pane in the playground
 */
class Pane {

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
			case 'percentage':
				$this->percentage = $value;
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
	 * Split this pane into two child panes
	 * @param boolean $horizontal If true, split horizontally
	 * @return array
	 */
	public function split($horizontal, $percentage=50) {
		$this->child1 = new Pane();
		$this->child2 = new Pane();
		$this->horizontal = $horizontal;
		$this->percentage = $percentage;

		return [$this->child1, $this->child2];
	}

	/**
	 * Add a tab to this pane
	 * @param Tab $tab Tab to add
	 */
	public function add(Tab $tab) {
		$this->tabs[] = $tab;
	}

	public function data() {

		if($this->child1 !== null) {
			// Split return...
			return [
				'horiz' => $this->horizontal,
				'percentage' => $this->percentage,
				'child1' => $this->child1->data(),
				'child2' => $this->child2->data()
			];
		} else {
			$tabData = [];
			foreach($this->tabs as $tab) {
				$tabData[] = $tab->data();
			}
			return [
				'tabs' => $tabData
			];
		}
	}

	private $tabs = [];

	private $horizontal = false;
	private $percentage = 50;
	private $child1 = null;
	private $child2 = null;
}