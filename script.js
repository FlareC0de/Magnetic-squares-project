let card = document.querySelectorAll('.card').forEach(cards => {
    cards.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let cardWidth = cards.clientWidth;
        let cardHeight = cards.clientHeight;
        let posX = (x - cardWidth/2);
        let posY = (y - cardHeight/2);
        cards.style.transform = `translateX(${posX}px) translateY(${posY}px) `;
        
    })
    cards.addEventListener('mouseout', (e) => {
        cards.style.transform = ``;
    })

})