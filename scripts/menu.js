onload = function() {
    document.getElementsByClassName('btn-menu')[0].onclick = function() {
        document.getElementsByTagName('nav')[0].classList.toggle('open');
    }
}