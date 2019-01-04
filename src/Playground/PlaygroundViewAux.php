<?php
/**
 * @file
 * Auxiliary view to support the playground
 */

namespace CL\Playground;

use CL\Site\Site;
use CL\Site\ViewAux;
use CL\Site\View;


/**
 * Auxiliary view to support the playground
 *
 * @cond
 * @property Playground playground
 * @endcond
 */
class PlaygroundViewAux extends ViewAux {
	/**
	 * PlaygroundViewAux constructor.
	 * Sets the default values.
	 */
	public function __construct() {
		$this->playground = new Playground();
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	public function install(View $view) {
		parent::install($view);

		$view->addJS('playground');
	}


	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * playground | Playground | A Playground object
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'playground':
				return $this->playground;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * playground | Playground | A Playground object
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'playground':
				$this->playground = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}

	private $playground;
}