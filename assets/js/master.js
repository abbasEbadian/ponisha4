var already = false
document.onreadystatechange = function () {
    if(already) return
    already = true;
    const $main = document.querySelector('#main-wrapper');
    const $toggler = document.querySelector('.bi-list');
    const $closer = document.querySelector('.sidebar .bi-x');
    const $sidebarButton = document.querySelectorAll('.accordion-header');
    const $show = document.querySelectorAll('.accordion-collapse');
    
    $toggler && $toggler.addEventListener('click', function (e) {
        $main && $main.classList.toggle('collapsed');
        console.log($show )
        for(let button of $show)
            button.classList.remove('show'); 
    })
    
    $closer && $closer.addEventListener('click', function (e) {
        $main && $main.classList.remove('collapsed');
        for(let button of $show)
            button.classList.remove('show'); 
    })

    for(let button of $sidebarButton)
        button.addEventListener('click', function (e) {
            $main && $main.classList.remove('collapsed');  
        })


    
}