

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
    window.scrollTo(0, 0);
    
};

const routes = {
    "/index.html": "/index.html",
    "/blog": "/pages/blog.html",
    "/css": "/pages/css.html",
};


const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];

    if(path === "/blog" ){
        const html = await fetch(route).then((data) => data.text());
        document.querySelector(".main").innerHTML = html;

        const tagA = document.querySelectorAll('.nav-links-item a');
            tagA.forEach(a => {
                a.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelector('.active')?.classList.remove('active');
                        a.classList.add('active');
                    
                
                });
            });



        

        
    }else if(path === "/index.html"){
        const html = await fetch(route).then((data) => data.text());
        document.querySelector(".content-root").innerHTML = html;
        const tagA = document.querySelectorAll('.nav-links-item a');
            tagA.forEach(a => {
                a.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelector('.active')?.classList.remove('active');
                        a.classList.add('active');
                    
                
                });
            });


    
    }else if(path === "/css"){
        const html = await fetch(route).then((data) => data.text());
        document.querySelector(".main").innerHTML = html;
        document.querySelector('.active')?.classList.remove('active');

    }
    
};

window.onpopstate = handleLocation;
window.onload = handleLocation;

handleLocation();


// window.onload = () => {
//     const storedLastClicked = JSON.parse(localStorage.getItem('lastClicked'));
// }