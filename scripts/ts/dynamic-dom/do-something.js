export function doSomething() {
  console.log("doing something");

  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("main-menu-container");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      console.log("adding sticky");
      header.classList.add("sticky");
    } else {
      console.log("removing stickey");
      header.classList.remove("sticky");
    }
  }
}
