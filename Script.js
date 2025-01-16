// Placeholder for interactivity (e.g., category card animations, dynamic updates)
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 6px 10px rgba(0, 255, 0, 0.4)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
  });
});
