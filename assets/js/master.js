var already = false
document.onreadystatechange = function () {
    if(already) return
    already = true;
    const $main = document.querySelector('#main-wrapper');
    const $toggler = document.querySelector('.bi-list');
    const $closer = document.querySelector('.sidebar .bi-x');
    
    $toggler && $toggler.addEventListener('click', function (e) {
        $main && $main.classList.toggle('collapsed');
    })
    
    $closer && $closer.addEventListener('click', function (e) {
        $main && $main.classList.remove('collapsed');
    })
    
}