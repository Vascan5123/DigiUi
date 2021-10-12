<?php

/*
 * This file is part of vascan/digi-ui.
 *
 * Copyright (c) 2021 Lupan Vasile.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Vascan\DigiUi;

use Flarum\Extend;
use Flarum\Api\Serializer\BasicDiscussionSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        ->attributes(Listener\AddItemThumbnail::class),

    (new Extend\Settings())
        ->serializeToForum('vascan.settingsFromClient', 'vascan.settingsFromAdmin')
];
