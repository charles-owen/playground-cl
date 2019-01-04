<?php
/**
 * @file
 * A tab for source code editing
 */

namespace CL\Playground\Tab;


class EditorTab extends Tab {
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

		$data['type'] = 'editor';

		return $data;
	}
}