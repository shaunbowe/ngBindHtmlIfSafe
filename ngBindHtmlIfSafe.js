app.directive("ngBindHtmlIfSafe", ['$compile', '$sce', function ($compile, $sce) {
    return function (scope, element, attrs) {
        scope.$watch(
            function (scope) {
                return scope.$eval(attrs.ngBindHtmlIfSafe);
            },
            function (value) {
                var sanitizedHtml = null;
                try {
                    sanitizedHtml = $sce.getTrustedHtml(value);
                } catch (ex) {
                }

                if (sanitizedHtml != null) {
                    element.html(sanitizedHtml);
                } else {
                    element.text(value);
                }

                $compile(element.contents())(scope);
            }
        );
    }
}]);
