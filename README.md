Qhuery
=======

A stupid sass experiment with colours. It generates 36000 media queries that change the body's background colour. There's no real point to it, but you've gotten this far so you must be curious. You're probably looking for [`queries.scss`](scss/queries.scss) or [`queries.css`](queries.css).

## Demo

Visit the [live site](http://www.qhuery.com) (Warning, might kill your browser). Here's a gif preview just in case.

![Preview](src/preview.gif)

## Requirements

- Ruby 1.9.2
- [Node](nodejs.org) with the latest version of Node Package Manager
- [Grunt](http://gruntjs.com/)

## Usage

For the first time use `npm install` to get dependencies and then run `grunt` to watch the sass.

The queries are output into a different file as they can take a while to compile (up to 40 minutes using Ruby Sass, but much quicker using libsass). If you want to recompile the queries, run `grunt sass:queries`.
