$(document).ready(()=>{
    links = {
        "blog":{
            "url":"#",
            "name":"DataPit [W.I.P]"
        },
        "blinkie":{
            "url":"https://adriansblinkiecollection.neocities.org",
            "name":"Blinkie Stash"
        }
    }
    $('#menu').on('click',()=>{
        if(typeof($('#menu-dropdown')[0]) == 'undefined'){
            let menu=`<div id="menu-dropdown" class="fixed bg-[#1b1c1f]/80 backdrop-blur-sm p-2 rounded-xl text-xl border-t-[#393b46] border border-1 border-[#393b46] right-2 h-[23em] top-20 z-30 sm:hidden cursor-default select-none"><div class="p-2"><a id="options" href="${links['blog']['url']}">${links['blog']['name']}</a></div><div class="p-2"><a id="options" href="${links['blinkie']['url']}">${links['blinkie']['name']}</a></div></div>`
            $(menu).insertAfter($('#nav'))
        }else{
            $('#menu-dropdown').remove()
        }
    })
})
