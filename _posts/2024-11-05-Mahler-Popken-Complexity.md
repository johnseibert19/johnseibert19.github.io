---
title:  "Mahler-Popken Complexity"
mathjax: true
layout: post
categories: media
---

## MathJax

[Mahler-Popken complexity](https://en.wikipedia.org/wiki/Integer_complexity) maps the smallest number of ones that can be used to represent it using ones and any number of additions, multiplications, and parentheses. It is defined by the following recursive function:

$$ y = mx + b $$

## Code

The naive implementation of the function is simple and uses the following Python code:

{% highlight c %}

static void asyncEnabled(Dict* args, void* vAdmin, String* txid, struct Allocator* requestAlloc)
{
    struct Admin* admin = Identity_check((struct Admin*) vAdmin);
    int64_t enabled = admin->asyncEnabled;
    Dict d = Dict_CONST(String_CONST("asyncEnabled"), Int_OBJ(enabled), NULL);
    Admin_sendMessage(&d, txid, admin);
}

{% endhighlight %}

## Gists

With the `jekyll-gist` plugin, which is preinstalled on Github Pages, you can embed gists simply by using the `gist` command:

<script src="https://gist.github.com/5555251.js?file=gist.md"></script>

## Embedded content

You can also embed a lot of stuff, for example from YouTube, using the `embed.html` include.

{% include embed.html url="https://www.youtube.com/embed/_C0A5zX-iqM" %}
