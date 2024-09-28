// JavaScript to handle navigation and dynamic content rendering
function navigate(page) {
  const content = document.getElementById("content");

  // Determine the content to display based on the page
  switch (page) {
    case "home":
      content.innerHTML = `
                <h1>Welcome to the Home Page!</h1>
                <p>This is a simple Single Page Application using plain JavaScript.</p>
            `;
      break;
    case "about":
      content.innerHTML = `
                <h1>About Us</h1>
                <p>This page contains information about our company.</p>
            `;
      break;
    case "contact":
      content.innerHTML = `
                <h1>Contact Us</h1>
                <p>You can reach us at contact@example.com.</p>
            `;
      break;
    default:
      content.innerHTML = `
                <h1>Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            `;
      break;
  }
}
