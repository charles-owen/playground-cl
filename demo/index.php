<?php
/// @cond
namespace CL\Playground;


require_once "../../../../site.php";
$view = new \CL\Course\View($site, ['at-least'=>\CL\Users\User::STAFF]);
$view->set_title('Playground Demo page');
$view->set_autoback();
$viewAux = new \CL\Playground\PlaygroundViewAux();
$view->add_aux($viewAux);
$playground = $viewAux->playground;
?>
<!doctype html>
<html lang="en-US">
<head>
	<link href="../../../../cl/course.css" type="text/css" rel="stylesheet" />
	<?php echo $view->head(); ?>
</head>
<body>
<?php echo $view->header(); ?>

<p>&nbsp;</p>

<?php

// Get the root pane
$pane = $playground->pane;
list($left, $right) = $pane->split(true, 50);

$editor = new Tab\EditorTab('main', 'Code');
$left->add($editor);

$output = new Tab\OutputTab('output', 'Result');
$right->add($output);

// Menus
$file = $playground->addMenu('File');
$save = $file->addMenu('Save');
$saveAction = new Action\Action('save');
$saveAction->option('appTag', 'playground-demo');
$saveAction->option('name', 'demo');
$saveAction->source('main');
$save->action = $saveAction;

$test = $playground->addMenu('Test');


$playground->load($site, $user, 'playground-demo', 'demo');

echo $view->exitContent();
echo $playground->present($site, $user);
echo $view->reenterContent();
?>
<p>&nbsp;</p>

<?php
echo $view->footer();
/// @endcond
?>
</body>
</html>
