const nav = document.querySelector('nav');
const line = document.createElement('div');
line.classList.add('line');
nav.appendChild(line);

const active = nav.querySelector('.active');
let pos = 0;
let wid = 0;

if (active) {
    pos = active.offsetLeft;
    wid = active.offsetWidth;
    line.style.left = `${pos}px`;
    line.style.width = `${wid}px`;
}
nav.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        
         const clickedItem = e.target.parentNode;
        
         
         if (!clickedItem.classList.contains('active') && !nav.classList.
         contains('animate')) {
            nav.classList.add('animate');
            
            const position = clickedItem.offsetLeft;
            const width = clickedItem.offsetWidth;

            const isForward = position >= pos;
            
            line.animate(
                [
                    { left: `${isForward ? pos : position}px`, width: `$
                    {isForward ? position - pos + width : pos - position + width}px` },
                    { width: `${width}px`, left: `${position}px` }
                ],
                { duration: 1000, easing: 'ease' }
            ).onfinish = () => {
                line.style.width = `${width}px`;
                line.style.left = `${position}px`;
                nav.classList.remove('animate');
            };

            pos = position;
            wid = width;

            nav.querySelectorAll('ul li').forEach(iten => item.classList.
            remove('active'));
            clickedItem.classList.add('active');
        }
    });
});


