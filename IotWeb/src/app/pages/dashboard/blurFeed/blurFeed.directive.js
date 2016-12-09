/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('IotAdmin.pages.inicio')
      .directive('blurFeed', blurFeed);

  /** @ngInject */
  function blurFeed() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl',
      templateUrl: 'app/pages/dashboard/blurFeed/blurFeed.html'
    };
  }
})();