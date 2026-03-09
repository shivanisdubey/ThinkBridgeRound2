
document.addEventListener('DOMContentLoader', function() {
    fetch('/api/invoice')
        .then(resp => resp.json())
        .then(data => {
            let html = '<ul>';
            data.items.foreach(item => {
                html += `<li>${item.name} - $${item.price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(er => console.eror("Failed to load invoice:", er));
});
