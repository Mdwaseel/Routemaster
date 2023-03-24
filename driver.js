function redirectToPage() {
    var dropdown = document.getElementById("myDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption !== "") {
      window.location.href = selectedOption;
    }
  }