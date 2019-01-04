<?php
/**
 * @file
 * Tab that represents program output
 */

namespace CL\Playground\Tab;

/**
 * Tab that represents program output
 */
class OutputTab extends Tab {
	/**
	 * Tab constructor.
	 * @param string $tag Tag associated with the tab. Used to fine tabs.
	 * @param string $name Name on the tab
	 */
	public function __construct($tag, $name) {
		parent::__construct($tag, $name);
	}

	/**
	 * Create data suitable for sending to client
	 * @return array
	 */
	public function data() {
		$data = parent::data();

		$data['type'] = 'output';

		return $data;
	}

}