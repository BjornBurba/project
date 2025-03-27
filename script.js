const content = {
    ro: {
        title: 'Hope Electrics',
        subtitle: 'Site Web în Construcție',
        description: 'Lucrăm din greu pentru a vă oferi o experiență nouă. Site-ul nostru va fi disponibil în curând.',
        portal: 'Portal Clienți',
        coming: 'În Curând'
    },
    en: {
        title: 'Hope Electrics',
        subtitle: 'Website Under Construction',
        description: "We're working hard to bring you a new experience. Our website will be available soon.",
        portal: 'Customer Portal',
        coming: 'Coming Soon'
    }
};

function setLanguage(lang) {
    // Update button states
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('ro-btn').classList.toggle('active', lang === 'ro');

    // Update content
    document.getElementById('title').textContent = content[lang].title;
    document.getElementById('subtitle').textContent = content[lang].subtitle;
    document.getElementById('description').textContent = content[lang].description;
    document.getElementById('portal-text').textContent = content[lang].portal;
    document.getElementById('coming-soon').textContent = content[lang].coming + ' 🚀';
}

// Set initial language to Romanian when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ro');
});