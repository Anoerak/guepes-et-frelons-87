<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerFvubfdQ\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerFvubfdQ/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerFvubfdQ.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerFvubfdQ\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerFvubfdQ\App_KernelDevDebugContainer([
    'container.build_hash' => 'FvubfdQ',
    'container.build_id' => '72c22872',
    'container.build_time' => 1691327196,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerFvubfdQ');
