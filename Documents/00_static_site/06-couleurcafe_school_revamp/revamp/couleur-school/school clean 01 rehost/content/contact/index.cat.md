---
weight: 1
title: "COntacto"
date: 2019-12-01T21:57:40+08:00
lastmod: 2020-01-01T16:45:40+08:00
draft: false
author: "Mohamed"
authorLink: "https://Mohamedzq.com"
description: "This article shows the basic Markdown syntax and format."
images: []
resources:
- name: "featured-image"
  src: "featured-image.png"

tags: ["Markdown", "HTML"]
categories: ["Markdown"]

lightgallery: true
---

![](featured-image.png)

This artiasfadsfcle offers a sample of basic Markdown syntax that can be used in Hugo content files.

<!--more-->

{{< admonition >}}
This article is a shameful copy of the great [Grav original page](http://learn.getgrav.org/content/markdown).

If you want to know about the extended Markdown syntax of **LoveIt** theme, please read [extended Markdown syntax page](../theme-documentation-content#extended-markdown-syntax).
{{< /admonition >}}

Let's face it: Writing content for the Web is tiresome. WYSIWYG editors help alleviate this task, but they generally result in horrible code, or worse yet, ugly web pages.

**Markdown** is a better way to write **HTML**, without all the complexities and ugliness that usually accompanies it.

Some of the key benefits are:

1. Markdown is simple to learn, with minimal extra characters, so it's also quicker to write content.
2. Less chance of errors when writing in Markdown.
3. Produces valid XHTML output.
4. Keeps the content and the visual display separate, so you cannot mess up the look of your site.
5. Write in any text editor or Markdown application you like.
6. Markdown is a joy to use!

John Gruber, the author of Markdown, puts it like this:

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible.
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text,
> without looking like it’s been marked up with tags or formatting instructions.
> While Markdown’s syntax has been influenced by several existing text-to-HTML filters,
> the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.
>
> {{< style "text-align: right;" >}}-- _John Gruber_{{< /style >}}

Without further delay, let us go over the main elements of Markdown and what the resulting HTML looks like!

{{< admonition tip >}}
:(far fa-bookmark fa-fw): Bookmark this page for easy future reference!
{{< /admonition >}}

## 1 Headings

Headings from `h2` through `h6` are constructed with a `#` for each level:

```markdown
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

The HTML looks like this:

```html
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

{{< admonition note "Heading IDs" >}}
To add a custom heading ID, enclose the custom ID in curly braces on the same line as the heading:

```markdown
### A Great Heading {#custom-id}
```

The HTML looks like this:

```html
<h3 id="custom-id">A Great Heading</h3>
```
{{< /admonition >}}

## 2 Comments

Comments should be HTML compatible.

```html
<!--
This is a comment
-->
```

Comment below should **NOT** be seen:

<!--
This is a comment
-->

## 3 Horizontal Rules

The HTML `<hr>` element is for creating a "thematic break" between paragraph-level elements.
In Markdown, you can create a `<hr>` with any of the following:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

The rendered output looks like this:

___
---
***

## 5 Inline HTML

If you need a certain HTML tag (with a class) you can simply use HTML:

```html
Paragraph in Markdown.

<div class="class">
    This is <b>HTML</b>
</div>

Paragraph in Markdown.
```

## 6 Emphasis

### Bold

For emphasizing a snippet of text with a heavier font-weight.

The following snippet of text is **rendered as bold text**.

```markdown
**rendered as bold text**
__rendered as bold text__
```

The HTML looks like this:

```html
<strong>rendered as bold text</strong>
```

### Italics

For emphasizing a snippet of text with italics.

The following snippet of text is _rendered as italicized text_.

```markdown
*rendered as italicized text*
_rendered as italicized text_
```

The HTML looks like this:

```html
<em>rendered as italicized text</em>
```

### Strikethrough

In [[GFM]^(GitHub flavored Markdown)](https://github.github.com/gfm/) you can do strikethroughs.

```markdown
~~Strike through this text.~~
```

The rendered output looks like this:

~~Strike through this text.~~

The HTML looks like this:

```html
<del>Strike through this text.</del>
```

### Combination

Bold, italics, and strikethrough can be used in combination.

```markdown
***bold and italics***
~~**strikethrough and bold**~~
~~*strikethrough and italics*~~
~~***bold, italics and strikethrough***~~
```

The rendered output looks like this:

***bold and italics***

~~**strikethrough and bold**~~

~~*strikethrough and italics*~~

~~***bold, italics and strikethrough***~~

The HTML looks like this:

```html
<em><strong>bold and italics</strong></em>
<del><strong>strikethrough and bold</strong></del>
<del><em>strikethrough and italics</em></del>
<del><em><strong>bold, italics and strikethrough</strong></em></del>
```


![Alt text][id]

With a reference later in the document defining the URL location:

```markdown
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
```

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

{{< admonition tip >}}
**LoveIt** theme has [special shortcode for image](../theme-documentation-extended-shortcodes#image), which provides more features.
{{< /admonition >}}
