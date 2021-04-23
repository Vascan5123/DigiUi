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

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),


    new Extend\Locales(__DIR__ . '/resources/locale')
];
