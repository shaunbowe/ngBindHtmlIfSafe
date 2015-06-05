# ngBindHtmlIfSafe
If the html passed is valid it will be displayed. If it is not valid it will display as plain text instead of the angular error:
[$sanitize:badparse] The sanitizer was unable to parse the following block of html

Usage:
```html
<div ng-bind-html-if-safe="SomeHtml"></div>
```
Try it here:
http://plnkr.co/edit/YIMJ8G
