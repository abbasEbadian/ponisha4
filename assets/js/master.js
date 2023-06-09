var already = false
document.onreadystatechange = function () {
    if(already) return
    already = true;
    const $main = document.querySelector('#main-wrapper');
    const $toggler = document.querySelector('.bi-list');
    const $closer = document.querySelector('.sidebar .bi-x');
    const $sidebarButton = document.querySelectorAll('.accordion-body a');
    const $show = document.querySelectorAll('.accordion-collapse');
    
    $toggler && $toggler.addEventListener('click', function (e) {
        $main && $main.classList.toggle('collapsed');
        // for(let button of $show)
        //     button.classList.remove('show'); 
    })
    
    $closer && $closer.addEventListener('click', function (e) {
        $main && $main.classList.remove('collapsed');
        // for(let button of $show)
        //     button.classList.remove('show'); 
    })

    for(let button of $sidebarButton)
        button.addEventListener('click', function (e) {
            $main && $main.classList.remove('collapsed');  
    })
    
    if(typeof Captcha !=='undefined' && document.querySelector('#canvas') ){
        new Captcha($('#canvas'));
    }
    
    const searchOpener = document.querySelector(".search-box .toggler")
    const searchAdvanced = document.querySelector(".search-box .advanced-box ")
    searchOpener && searchOpener.addEventListener('click', function (e) {
        searchAdvanced&&searchAdvanced.classList.toggle('d-none')
        if (searchOpener.classList.contains('bi-chevron-down')) {
            searchOpener.classList.remove("bi-chevron-down")
            searchOpener.classList.add("bi-x")
        }else{
            searchOpener.classList.add("bi-chevron-down")
            searchOpener.classList.remove("bi-x")
        }
    })
    $(".textarea-with-counter").attr('maxlength', 500)
        .on("input", function (e) {
            let value = String(e.target.value)
            const len = value.length
            const remaining = 500 - len
            $(e.target).next('.textarea-counter').find('.count').text(remaining)

        })
        .trigger("input")

    initTabs()
    checkTicketTitle()
    eye()

}

function initTabs() {
    const tabs = document.querySelector('.domains-page .page-tabs')
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
function checkTicketTitle() {
    const $tabs = $(".custom-tabs");
    if(!$tabs.get()) return
    $($tabs).find("[data-target]").change(function (e) {
        $tabs.find("[data-id]").addClass('d-none')
        const id = $(e.target).data('target')
        $tabs.find(`[data-id=${id}]`).removeClass('d-none')
    })
    
}

function eye() {
    $(".iconed-input-box button").on("click", function (e) {
        const shouldShow = !$(e.target).hasClass("text-danger")
        $(e.target).toggleClass('text-danger')
        $(e.target).parents('.input-group').find('input').get(0).type =  shouldShow? "text": "password"
    })
}