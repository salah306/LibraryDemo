myLibrary.controller("booksController", function ($scope) {
     
    $scope.books = [
        { name: 'A brief history of time', author: 'Stephen Hawking' },
        { name: 'Death: The Final Stage of Growth', author: 'Elisabeth Kübler-Ross' },
        { name: '50 Mathematical Ideas You Really Need to Know', author: 'Tony Crilly' },
        { name: 'The Grand Design', author: 'Tony Crilly', author: 'Stephen Hawking'}
    ];
  
});
