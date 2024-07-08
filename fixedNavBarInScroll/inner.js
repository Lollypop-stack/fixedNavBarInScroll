window.addEventListener('scroll', e=> {
    let navbar = document.getElementById('navbar').classList
    let active_class = 'navbar_scrolled';
    let navbar_hid = 'navbar_hidden'
    if(pageYOffset > 450) navbar.add(active_class)
    else if (pageYOffset < 110) navbar.remove(active_class);
    if(pageYOffset < 450 && navbar.contains('navbar_scrolled') == true){
        navbar.add(navbar_hid);
        navbar.remove(active_class);
    }
    else navbar.remove(navbar_hid);
})
