<?php
/**
 * @file
 * Base class for actions that can be executed in the playground.
 */

namespace CL\Playground\Action;


use CL\Site\Site;

/**
 * Base class for actions that can be executed in the playground.
 */
class Action {

	public function __construct($tag) {
		$this->tag = $tag;
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
			case 'tag':
				return $this->tag;

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
			'tag'=>$this->tag
		];

		foreach($this->options as $name => $value) {
			$data[$name] = $value;
		}

		if(count($this->sources) > 0) {
			$data['sources'] = $this->sources;
		}

		return $data;
	}

	/**
	 * Add an option to send to runtime for this action.
	 * @param string $name
	 * @param mixed $value
	 */
	public function option($name, $value) {
		$this->options[$name] = $value;
	}

	/**
	 * Add a source associated with this action.
	 * @param string $tag Tag for the tab we get the data from
	 */
	public function source($tag) {
		$this->sources[] = $tag;
	}


	private $tag;
	private $options = [];
	private $sources = [];
}