<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerCzcmv8G\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerCzcmv8G/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerCzcmv8G.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerCzcmv8G\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerCzcmv8G\App_KernelDevDebugContainer([
    'container.build_hash' => 'Czcmv8G',
    'container.build_id' => 'c738a22f',
    'container.build_time' => 1691320161,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerCzcmv8G');
