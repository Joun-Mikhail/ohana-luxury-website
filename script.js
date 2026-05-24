const WHATSAPP_NUMBER = "201229884278";
const IG_URL = "https://www.instagram.com/ohanabysara/";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.order-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product || 'OHANA handmade piece';
    const message = `Hi OHANA, I want to ask about the ${product}. Please send me the available colors, sizes, price and delivery details.`;
    window.open(whatsappUrl(message), '_blank', 'noopener');
  });
});

const orderForm = document.querySelector('#orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(orderForm);
    const design = data.get('design') || 'Custom design';
    const color = data.get('color') || 'not sure yet';
    const date = data.get('date') || 'not specified';
    const notes = data.get('notes') || 'No extra notes';
    const message = `Hi OHANA, I want to place an order.\n\nDesign: ${design}\nColor: ${color}\nOccasion/date: ${date}\nNotes: ${notes}\n\nPlease send me the price, delivery time and how to confirm.`;
    window.open(whatsappUrl(message), '_blank', 'noopener');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Duplicate marquee content for seamless movement
const marquee = document.querySelector('.marquee div');
if (marquee) {
  marquee.innerHTML += marquee.innerHTML;
}
