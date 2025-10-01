  document.querySelectorAll('.copy').forEach(item => {
    item.style.cursor = "pointer"; // show pointer cursor
    item.addEventListener('click', () => {
      const text = item.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        item.style.color = "#4ade80"; // change color (green) as feedback
        setTimeout(() => item.style.color = "#e6eef6", 1500); // reset color
      });
    });
  });

