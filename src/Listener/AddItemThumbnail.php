<?php

namespace Vascan\DigiUi\Listener;

use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Support\Arr;

class AddItemThumbnail
{
    /**
     * @var Repository
     */
    protected $cache;

    public function __construct(Repository $cache)
    {
        $this->cache = $cache;
    }

    public function __invoke(BasicDiscussionSerializer $serializer, Discussion $discussion)
    {
        $post = $discussion->firstPost;

        if (!($post instanceof CommentPost)) {
            return;
        }

        $key = "block-cat-discussion-thumbnail.discussion.{$post->id}";
        $cached = $this->cache->get($key);
        $thumbnail = Arr::get($cached, 'url');

        if (!$this->cache->has($key) || ($post->edited_at && Arr::has($cached, 'date') && $post->edited_at->isAfter($cached['date']))) {
            $content = $discussion->firstPost->formatContent();

            if (!$content) {
                return;
            }

            preg_match('/<img.+?src=[\"\'](.+?)[\"\'].*?>/i', $content, $match);

            $thumbnail = @$match[1];

            $this->cache->forever($key, $match ? [
                'url'  => @$match[1],
                'date' => $post->edited_at,
            ] : null);
        }

        $attributes['customThumbnail'] = $thumbnail;

        return $attributes;
    }
}
