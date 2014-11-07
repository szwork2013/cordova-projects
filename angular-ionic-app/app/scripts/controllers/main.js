'use strict';

/**
 * @ngdoc function
 * @name angularIonicAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularIonicAppApp
 */
angular.module('angularIonicAppApp').controller('MainCtrl', function($scope, $cordovaDevice, $cordovaCamera) {

    document.addEventListener("deviceready", function() {
        $scope.device = $cordovaDevice.getDevice();
        $scope.cordova = $cordovaDevice.getCordova();
        $scope.model = $cordovaDevice.getModel();
        $scope.platform = $cordovaDevice.getPlatform();
        $scope.uuid = $cordovaDevice.getUUID();
        $scope.version = $cordovaDevice.getVersion();
    });

    document.addEventListener("deviceready", function() {
        $scope.takePicture = function() {
            var options = {
                quality : 75,
                destinationType : Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType : Camera.EncodingType.JPEG,
                targetWidth : 100,
                targetHeight : 100,
                popoverOptions : CameraPopoverOptions,
                saveToPhotoAlbum : false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                alert(imageData);
            }, function(err) {
                alert(err);
            });
        };
    });

});
