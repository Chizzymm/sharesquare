// // Smooth scrolling for navigation links
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', event => {
//       // Prevent default behavior
//       event.preventDefault();
  
//       // Get the target section
//       const targetId = link.getAttribute('href');
//       const targetSection = document.querySelector(targetId);
  
//       // Scroll to the target section smoothly
//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop - 60, // Adjust offset for header height
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
  