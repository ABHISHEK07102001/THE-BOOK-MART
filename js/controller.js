angular
    .module("myApp.controller",[])
    
    .controller(
        "book.controller",
        function($scope,$rootScope,$location){
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
            //   $rootScope.myData.push(data);
              $location.path('/addnewbook');
          }
    })

    .controller(
        "bookview",
        function ($scope, $rootScope, $routeParams,$location) {
            let bookId = $routeParams.bookId;
      
            $scope.book = $rootScope.myData.find((book) => {
              return book.bookId == bookId;
            });

            $scope.removeItem = (bookId) => {
                // API call for delete a contact
                // success function
                let index = $rootScope.myData.findIndex((book) => {
                  return book.bookId == bookId;
                });
                $rootScope.myData.splice(index, 1);
                $location.path("/book");

                /////////Give Error message to user/////////

                var alertPlaceholder = document.getElementById(
                  "liveAlertPlaceholder"
                );
                var alertTrigger = document.getElementById("liveAlertBtn");

                function alert(message, type) {
                  var wrapper = document.createElement("div");
                  wrapper.innerHTML =
                    '<div class="alert alert-' +
                    type +
                    ' alert-dismissible" role="alert">' +
                    message +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

                  alertPlaceholder.append(wrapper);
                }

                if (alertTrigger) {
                  alertTrigger.addEventListener("click", function () {
                    alert("Nice, you triggered this alert message!", "success");
                  });
                }  //give message to user 
              };

        }
    )

    .controller(
        "addnewbook.controller",
        function ($scope, $rootScope, $location) {
            // $scope.newBook = {};
        
            $scope.addnewbook = () => {
             
              // API call for add new contact
              // success function
          
              $rootScope.myData.unshift({
                  bookId: $scope.newBook.bookid,
                  bookName: $scope.newBook.bname,
                  url:"",
                  authorName:$scope.newBook.aname,
                  description: $scope.newBook.description,
                  price: $scope.newBook.price,
                  categories:"demo",
              });
              $location.path("/book");
            // alert('hello');
            // console.log('jsdhfk');
              
            }

          }
    )

    .controller(
        "notebook.controller",
        function($scope,$rootScope){
            $scope.removeItem = (index)=>{
                $rootScope.myData.splice(index, 1);
              }
        }
    )
    .controller(
        "pen.controller",
        function($scope){

        }
    )

    .controller(
        "addbook.controller",
        function($scope){
            
        }
    )
