<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo e(config("app.name")); ?></title>
	<link rel="shortcut icon" href="<?php echo e(asset('favicon.ico')); ?>" />
	
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">

	<?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
	<?php echo app('Illuminate\Foundation\Vite')('resources/react/App.tsx'); ?>
</head>
<body>
	<div id="app"></div>
</body>
</html><?php /**PATH D:\OSPanel\home\teachers-schedule\resources\views/index.blade.php ENDPATH**/ ?>