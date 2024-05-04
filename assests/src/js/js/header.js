const spanlist = document.querySelectorAll('.spanlist');
const navigation = document.querySelector('#navigation');
const span3 = document.querySelector('.span-3');
const span2 = document.querySelector('.span-2');
const span1 = document.querySelector('.span-1');

let SpanOpen = false;



spanlist.forEach(item => {
    item.addEventListener('click', () => {
        console.log('zupp');
            if(!SpanOpen){
                Open();
                SpanOpen = true;
    
            }else if(SpanOpen){
                Close();
                SpanOpen = false;
            }
         

    });
});

const tagA = document.querySelectorAll('.nav-links-item a');
tagA.forEach(a => {
    a.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.active')?.classList.remove('active');
            a.classList.add('active');
            Close();
            SpanOpen = false;
        
       
    });
});


function Open (){
    navigation.style.top = '0';
    span3.style.transform = 'rotate(45deg)translateY(-6px) translateX(-4px)';
    span1.style.transform = ' rotate(-45deg) translateY(10px) translateX(-6px)';
    span2.style.opacity = '0';
    span3.style.width =  '2rem';
    SpanOpen = true;
}

function Close (){
    navigation.style.top = '-100%';
    SpanOpen = false;
    span3.style.transform = 'rotate(0deg)translateY(0px) translateX(0px)';
    span1.style.transform = ' rotate(0deg) translateY(0px) translateX(0px)';
    span2.style.opacity = '1';
    span3.style.width =  '1.5rem';
}



        // const tagA = document.querySelectorAll('.nav-links-item a');
        //     tagA.forEach(a => {
        //         a.addEventListener('click', (e) => {
        //             e.prevenDefault();
        //             const active = document.querySelector('.active')?.classList.remove('active');
        //             a.classList.add('active');
        //         });
        //     });