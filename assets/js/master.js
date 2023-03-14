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
    
    initTabs()
}

function initTabs() {
    const tabs = document.querySelector('.domains-page .tabs')
    if(!tabs) return
    const tables = document.querySelectorAll('.domains-page table')
    for (let tab of tabs.children){
        tab.addEventListener('click', function (event) {
            const tableID = tab.getAttribute('data-table-target')
            for (let table of tables){
                table.classList.add("d-none")
            }
            document.querySelector(`[data-table-id='${tableID}']`).classList.remove('d-none')
            for (let tab of tabs.children){
                tab.classList.remove('active')
            }
            event.target.classList.add('active')
        })
    }
}