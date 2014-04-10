/**
 * Created by pvty on 4/4/14.
 */

app.controller('placePhotosController', function($scope, $modalInstance, placePhotosService, venueId, venueName){
    $scope.venueName = venueName;
    $scope.venueId = venueId;

    $scope.venuePhotos = [];

    placePhotosService.get({venueId:venueId}, function(photosResult){
        $scope.venuePhotos = photosResult.response.photos.items;
    } );

    $scope.buildVenuePhoto = function (photo) {

        return photo.prefix + '256x256' + photo.suffix;
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});