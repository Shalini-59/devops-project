// scripts/main.js - shared behaviors (nav highlight, simple search)
document.addEventListener('DOMContentLoaded', function(){
  // highlight nav link based on current filename
  const links = document.querySelectorAll('.nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href') || '';
    if(href.endsWith(current)) a.classList.add('active');
  });
  // simple responsive toggle (if needed)
  // basic search input behavior (only client-side filtering for students table)
  const search = document.getElementById('searchInput');
  if(search){
    search.addEventListener('input', function(e){
      const q = e.target.value.toLowerCase().trim();
      const tbody = document.getElementById('studentsTbody');
      if(tbody){
        Array.from(tbody.children).forEach(tr=>{
          const text = tr.textContent.toLowerCase();
          tr.style.display = text.includes(q) ? '' : 'none';
        });
      }
    });
  }
});