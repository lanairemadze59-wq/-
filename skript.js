function openRegister() {
    // მოდალური ფანჯრის გააქტიურება
    document.getElementById('register-modal').classList.add('active');
    document.body.style.overflow = 'hidden';

    // მონაცემების ავტომატური ჩასმა ველებში
    document.getElementById('reg-name').value = "გიორგი";
    document.getElementById('reg-lastname').value = "ბერიძე";
    document.getElementById('reg-code').value = "REG-2026-X98B";
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    if (e.target.id === 'register-modal') {
        closeModal('register-modal');
    }
}

function registerUser() {
    const name = document.getElementById('reg-name').value.trim();
    const lastname = document.getElementById('reg-lastname').value.trim();
    const code = document.getElementById('reg-code').value.trim();

    if (!name || !lastname || !code) {
        alert('გთხოვ შეავსო ყველა ველი!');
        return;
    }

    const msg = document.getElementById('modal-success');
    msg.style.display = 'block';
    msg.textContent = '✅ წარმატებულია! კეთილი იყოს შენი მობრძანება, ' + name + '!';

    setTimeout(() => closeModal('register-modal'), 2500);
}

function copyCode(btn) {
    navigator.clipboard.writeText(btn.parentElement.nextElementSibling.innerText);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 2000);
}

function filterSnippets() {
    let q = document.getElementById('snippetSearch').value.toLowerCase();
    let cards = document.querySelectorAll('[data-title]');
    cards.forEach(card => {
        card.style.display = card.dataset.title.toLowerCase().includes(q) ? "block" : "none";
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal('register-modal');
});