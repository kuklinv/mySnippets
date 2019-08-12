// <button data-toggle-id="subscribe-mail">
//     Показать форму подписки
// </button>
//
// <form id="subscribe-mail" hidden>
// Ваша почта: <input type="email">
//     </form>

    // <script>
    document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;

        let elem = document.getElementById(id);

        elem.hidden = !elem.hidden;
    });
// </script>