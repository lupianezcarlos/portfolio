'use strict';

describe('in-viewport: viewport-enter directive', function() {

    var $compile,
        $rootScope,
        $scope,

        viewportMockController;

    beforeEach(module('in-viewport'));

    beforeEach(inject(function (_$compile_, _$rootScope_, viewportDirective) {
        $compile        = _$compile_;
        $rootScope      = _$rootScope_;
        $scope          = $rootScope.$new();

        viewportDirective[0].controller = function () {
            this.items = [];
            this.add = function (event, element, callback) {
                this.items.push({
                    event: event,
                    element: element,
                    callback: callback
                });
            };
            this.updateDelayed = function () {};
            this.setViewportFn = function () {};

            viewportMockController = this;
            spyOn(viewportMockController, 'add').and.callThrough();
        };
    }));

    it('should empty attribute', function () {
        var element = angular.element('<div viewport><div viewport-enter></div></div>'),
            elementScope;

        expect(function () {
            $compile(element)($scope);
            elementScope = element.scope();
            $scope.$digest();
        }).not.toThrow();

        expect(viewportMockController.add.calls.count()).toBe(0);
    });

    it('should require a viewport parent', function () {
        var element = angular.element('<div viewport-enter>'),
            elementScope;

        expect(function () {
            $compile(element)($scope);
        }).toThrow();
    });

    it('should add a listener to the viewport controller', function () {
        var element = angular.element('<div viewport><div viewport-enter="visible = true"></div>'),
            elementScope;

        expect(function () {
            $compile(element)($scope);
            elementScope = element.scope();
            $scope.$digest();
        }).not.toThrow();

        expect(viewportMockController.add.calls.count()).toBe(1);
    });

    it('should add a listener to the viewport controller', function () {
        var element = angular.element('<div viewport><div viewport-enter="visible = true"></div>'),
            elementScope;

        $compile(element)($scope);
        elementScope = element.scope();
        $scope.$digest();

        viewportMockController.items[0].callback();
        $scope.$digest();

        expect(elementScope.visible).toBeTruthy();
    });

});