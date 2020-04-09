Pagination
---
Source: [Tomek Kaczanowski](http://kaczanowscy.pl/tomek/2013-04/code-kata-pager)

Provide an organized object that will help to render the UI part based on received data.

![pager control](http://kaczanowscy.pl/tomek/sites/default/files/2013_pager_allegro.png)

You will receive the next data as an input:
1. Total number of items (For example 50 items)
1. Number of items per page. (For example 20 items per page)
1. Offset - How many items user already passed. (If there are 20 items per page and 
user is on 3rd page - The offset will be 40).

Given this data pager should be able to answer the following questions:

1. How many pages are there? - e.g. 50/20 - you do the math, please,
1. Should prev/next link be visible? - e.g. prev button should not be visible when user is on the first page,
1. Which links to print? - e.g. when user is on 25th page, then links to 24, 25 and 26 should be printed,
1. Which page is current? - so we could bold/highlight it's number (and remove the link).

