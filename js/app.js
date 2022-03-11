var app = angular.module("myApp", [
    "ngRoute",
    "myApp.controller",
    // "myApp.filter",
]);

app.config(function($routeProvider){
    $routeProvider

    // .when("/",{
    //     templateUrl : "/KitaabGhar/index.html"
    // })

    .when("/book",{
        templateUrl : "views/book.html",
        controller : "book.controller"
    })

    .when("/book/:bookId",{
        templateUrl : "views/bookview.html",
        controller : "bookview"
    })

    .when("/pen",{
        templateUrl : "views/pen.html"

    })

    .when("/notebook",{
        templateUrl : "views/notebook.html",
        controller : "notebook.controller"
    })

    .when("/addnewbook",{
        templateUrl : "views/addnewbook.html",
        controller : "addnewbook.controller"
    })

    .otherwise({
        template : `<strong> The Content is not available</strong>`
    });

});

app.run(($rootScope, $http, $location) => {
    $rootScope.myData = [
        {bookId:1,bookName:"Town Planning",url:"",authorName:"Rangwala",description:"A text book for Law students",price:90.00,categories:"Law"},
        {bookId:2,bookName:"Anna Karenina ", url:"",authorName:"Leo Tolstoy ",description:"A text book for engineering students",price:89.10,categories:"Engineering"},
        {bookId:3,bookName:"Madame Bovary",url:"",authorName:"James Joyce",description:"A text book for B.com students",price:88.47,categories:"Commerce"},
        {bookId:4,bookName:"Chemistry",url:"",authorName:"Vladimir Nabokov",description:"A text book for B.A students",price:87.21,categories:"Arts"},
        {bookId:5,bookName:"biology",url:"",authorName:" Fyodor Dostoevsky",description:"A text book for Bio students",price:86.12,categories:"Biology"},
        {bookId:6,bookName:"physics",url:"",authorName:"William Faulkner",description:"A text book for Pharmacy students",price:85.00,categories:"Medical"},
        {bookId:7,bookName:"mechanical",url:"",authorName:"Charles Dickens ",description:"A text book for Law students",price:54.44,categories:"Law"},
        {bookId:8,bookName:"civil",url:"",authorName:"Anton Checkhov ",description:"A text book for Law students",price:84.32,categories:"Law"},
        {bookId:9,bookName:"War and Peace",url:"",authorName:"Rangwala9",description:"A text book for Law students",price:66.25,categories:"Law"},
        {bookId:10,bookName:"Lolita by Vladimi",url:"",authorName:"Rangwala10",description:"A text book for Law students",price:45.00,categories:"Law"},
        {bookId:11,bookName:"The Adventures of Huckleberry Finn",url:"",authorName:"Rangwala11",description:"A text book for Law students",price:36.50,categories:"Law"},
        {bookId:12,bookName:"Hamlet",url:"",authorName:" William Shakespeare",description:"A text book for Law students",price:68.00,categories:"Law"},
        {bookId:13,bookName:"The Great Gatsby",url:"",authorName:"Rangwala13",description:"A text book for Law students",price:64.54,categories:"Law"},
        {bookId:14,bookName:"mathematics",url:"",authorName:"Rangwala14",description:"A text book for Law students",price:63.02,categories:"Law"},
        {bookId:15,bookName:"english",url:"",authorName:"Rangwala15",description:"A text book for Law students",price:62.32,categories:"Law"},
        {bookId:16,bookName:"Planning",url:"",authorName:"Rangwala16",description:"A text book for Law students",price:76.36,categories:"Law"},
        {bookId:17,bookName:"environment",url:"",authorName:"Rangwala17",description:"A text book for Law students",price:92.32,categories:"Law"},
        {bookId:18,bookName:"EVS",url:"",authorName:"Rangwala18",description:"A text book for Law students",price:40.29,categories:"Law"},
        {bookId:19,bookName:"Crisis",url:"",authorName:"Rangwala19",description:"A text book for Law students",price:35.87,categories:"Law"},
    ];

});