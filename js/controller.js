angular
    .module("myApp.controller",[])
    .controller(
        "book.controller",
        function($scope,$rootScope){
            // const url = "book.json";
            // $http.get(url).then(function(response){
            //     $scope.myData = response.data;
            //     console.log('$scope.myData');
            // })        

        $scope.removeItem = function(index){
            $rootScope.myData.splice(index, 1);
          }

          $scope.editDetail = function(data){
              $scope.newBook = data;
              console.log($scope.newBook)
          }
    })

    .controller(
        "bookview",
        ['$scope', '$routeParams', 'MyElements', function($scope, $routeParams, MyElements) {
            MyElements.get({'bookName': $routeParams.newbook.bname, description:$rootScope.newBook.description
            },
             function(elm) {
                $scope.elm = elm;
            })
    }])

    .controller(
        "addnewbook.controller",
        function($rootScope){
            $rootScope.addbook = function(){
                $rootScope.myData.push({bookId:$rootScope.newBook.bookid,bookName:$rootScope.newBook.bname,
                                                authorName:$rootScope.newBook.aname,
                                                description:$rootScope.newBook.description,
                                                price:$rootScope.newBook.price
                })
                console.log($rootScope.myData)
            }
        }
        
    )

    .controller(
        "notebook.controller",
        function($scope,$rootScope){
            $scope.removeItem = function(index){
                $rootScope.myData.splice(index, 1);
              }
        }
    )
    .controller(
        "pen.controller",
        function($scope){

        }
    )

    .controller
