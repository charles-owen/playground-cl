<?php
/**
 * @file
 * Base class for the possible Playground tabs.
 */

namespace CL\Playground\Tab;

/**
 * Base class for the possible Playground tabs.
 */
abstract class Tab {
	/**
	 * Tab constructor.
	 * @param string $tag Tag associated with the tab. Used to fine tabs.
	 * @param string $name Name on the tab
	 */
	public function __construct($tag, $name) {
		$this->tag = $tag;
		$this->name = $name;
	}

	/**
	 * Create data suitable for sending to client
	 * @return array
	 */
	public function data() {
		return [
			'tag'=>$this->tag,
			'name'=>$this->name
		];
	}

	private $tag;
	private $name;
}