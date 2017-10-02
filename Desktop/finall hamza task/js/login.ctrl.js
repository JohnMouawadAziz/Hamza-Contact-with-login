contactGallery.controller('loginController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.login = {
        userName: '',
        password: ''
    };
    $scope.loginAuth = loginAuth;



    $timeout(function () {
        $('.ui.form')
        .form({
            fields: {
                userName: {
                    identifier: 'userName',
                    rules: [{
                        type: 'empty',
                        prompt: 'Please enter a username'
                    }]
                },
                password: {
                    identifier: 'password',
                    rules: [{
                        type: 'empty',
                        prompt: 'Please enter a password'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'Your password must be at least {ruleValue} characters'
                    }
                    ]
                },

            },
            onSuccess: function () {
                $scope.loginAuth();
            }
        });
    }, 200);

    function loginAuth() {
        console.log($scope.login);
    }


    $scope.submit(function() {

         var uname=$scope.login.userName;
         var password =$scope.login.password;
         if ($scope.uname=='john' && $scope.password=='john') {
             $location.path('/gallery');

         }
     });


}]);
