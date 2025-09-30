const navLinks = document.querySelectorAll('nav a');
    const tabs = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // remove active from all
        navLinks.forEach(l => l.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        // add to clicked
        link.classList.add('active');
        document.getElementById(link.dataset.tab).classList.add('active');
      });
    });