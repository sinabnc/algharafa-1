function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

// Toggle dropdowns within the sidebar
var dropdownBtns = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
