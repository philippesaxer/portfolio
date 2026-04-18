/* ============================================================
   PORTFOLIO — Philippe Saxer
   js/main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Check for category filter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        // Attempt to find radio button on projekte.html
        const filterRadio = document.getElementById('filter-' + filterParam);
        if (filterRadio) {
            filterRadio.checked = true;
        }
    }

    const header = document.querySelector('.site-header');
    
    // Scroll handling for header shrink effect
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    // Initial check on load
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Horizontal Scroll Logic
    const horizontalSection = document.querySelector('.project-horizontal-scroll');
    const projectTrack = document.getElementById('projectTrack');

    if (horizontalSection && projectTrack) {
        let isScrolling = false;
        
        const computeHorizontalScroll = () => {
            if (window.innerWidth <= 768) {
                projectTrack.style.transform = '';
                isScrolling = false;
                return;
            }
            const sectionOffsetTop = horizontalSection.offsetTop;
            const scrollDistance = window.scrollY - sectionOffsetTop;
            
            // Total height available to scroll vertically in this section
            const totalVerticalScroll = horizontalSection.offsetHeight - window.innerHeight;
            
            // Percentage of progress (0 to 1)
            let progress = scrollDistance / totalVerticalScroll;
            progress = Math.max(0, Math.min(1, progress));

            // Percentage to amount of horizontal movement
            // We want the last card to be visible at the end
            const maxTrackMove = projectTrack.scrollWidth - window.innerWidth + 80; // plus some padding
            
            projectTrack.style.transform = `translateX(-${progress * maxTrackMove}px)`;
            isScrolling = false;
        };

        const updateHorizontalScroll = () => {
            if (!isScrolling) {
                isScrolling = true;
                window.requestAnimationFrame(computeHorizontalScroll);
            }
        };

        window.addEventListener('scroll', updateHorizontalScroll, { passive: true });
        window.addEventListener('resize', updateHorizontalScroll);
        updateHorizontalScroll(); // Initial position
    }
});

/* ============================================================
   EASTER EGG - SNAKE GAME
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const footerLogo = document.querySelector('.footer-brand .site-logo img');
    if (!footerLogo) return;

    // Create Modal Elements dynamically
    const modal = document.createElement('div');
    modal.className = 'snake-modal';
    
    modal.innerHTML = `
        <div class="snake-game-container">
            <div class="snake-top-bar">
                <div class="snake-score-wrapper">
                    <span class="snake-apple-icon"></span>
                    <span id="snakeScore">0</span>
                </div>
                <button class="snake-close-btn">&times;</button>
            </div>
            <canvas id="snakeCanvas" width="544" height="480"></canvas>
            <div class="snake-game-over" id="snakeGameOver">
                <h2>Game Over!</h2>
                <button class="snake-restart-btn" id="snakeRestartBtn">Play Again</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('snakeScore');
    const gameOverScreen = document.getElementById('snakeGameOver');
    const restartBtn = document.getElementById('snakeRestartBtn');
    const closeBtn = document.querySelector('.snake-close-btn');
    
    // Game state
    const gridCols = 17;
    const gridRows = 15;
    const tileSize = 32;
    
    let snake = [];
    let apple = { x: 0, y: 0 };
    let direction = { x: 1, y: 0 };
    let nextDirection = { x: 1, y: 0 };
    let score = 0;
    let gameOver = false;
    let gameLoop;
    let snakeSpeed = 120; // ms per tick
    let lastRenderTime = 0;
    
    function initGame() {
        snake = [
            { x: 4, y: 7 },
            { x: 3, y: 7 },
            { x: 2, y: 7 }
        ];
        direction = { x: 1, y: 0 };
        nextDirection = { x: 1, y: 0 };
        score = 0;
        scoreElement.textContent = score;
        gameOver = false;
        gameOverScreen.classList.remove('active');
        placeApple();
        lastRenderTime = 0;
        if(gameLoop) cancelAnimationFrame(gameLoop);
        gameLoop = requestAnimationFrame(main);
    }
    
    function placeApple() {
        let newX, newY, isOnSnake;
        do {
            isOnSnake = false;
            newX = Math.floor(Math.random() * gridCols);
            newY = Math.floor(Math.random() * gridRows);
            for (let segment of snake) {
                if (segment.x === newX && segment.y === newY) {
                    isOnSnake = true;
                    break;
                }
            }
        } while (isOnSnake);
        apple = { x: newX, y: newY };
    }
    
    function main(currentTime) {
        if (gameOver) {
            cancelAnimationFrame(gameLoop);
            return;
        }
        
        gameLoop = requestAnimationFrame(main);
        
        const secondsSinceLastRender = currentTime - lastRenderTime;
        if (secondsSinceLastRender < snakeSpeed) return;
        
        lastRenderTime = currentTime;
        
        update();
        draw();
    }
    
    function update() {
        direction = nextDirection;
        const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        
        // Wall collision
        if (newHead.x < 0 || newHead.x >= gridCols || newHead.y < 0 || newHead.y >= gridRows) {
            triggerGameOver();
            return;
        }
        
        // Self collision
        for (let segment of snake) {
            if (newHead.x === segment.x && newHead.y === segment.y) {
                triggerGameOver();
                return;
            }
        }
        
        snake.unshift(newHead);
        
        // Apple logic
        if (newHead.x === apple.x && newHead.y === apple.y) {
            score++;
            scoreElement.textContent = score;
            placeApple();
            // Slightly increase speed as score goes up
            if(snakeSpeed > 60) snakeSpeed -= 2;
        } else {
            snake.pop();
        }
    }
    
    function draw() {
        // Draw grid
        for (let row = 0; row < gridRows; row++) {
            for (let col = 0; col < gridCols; col++) {
                ctx.fillStyle = (row + col) % 2 === 0 ? '#aad751' : '#a2d149';
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
        
        // Draw Apple (red circle)
        ctx.fillStyle = '#e7471d';
        ctx.beginPath();
        ctx.arc(apple.x * tileSize + tileSize/2, apple.y * tileSize + tileSize/2, tileSize/2 - 2, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw Snake
        for (let i = 0; i < snake.length; i++) {
            const segment = snake[i];
            let padding = 0; // Solid join
            
            ctx.fillStyle = '#4573e8';
            
            // Render segment
            ctx.fillRect(segment.x * tileSize + padding, segment.y * tileSize + padding, tileSize - padding*2, tileSize - padding*2);
            
            // Draw eyes on head
            if (i === 0) {
                ctx.fillStyle = 'white';
                
                let eye1X = segment.x * tileSize;
                let eye1Y = segment.y * tileSize;
                let eye2X = segment.x * tileSize;
                let eye2Y = segment.y * tileSize;
                
                // Adjust eye positions based on direction
                if(direction.x === 1) { // right
                    eye1X += 22; eye1Y += 8;
                    eye2X += 22; eye2Y += 24;
                } else if(direction.x === -1) { // left
                    eye1X += 10; eye1Y += 8;
                    eye2X += 10; eye2Y += 24;
                } else if(direction.y === 1) { // down
                    eye1X += 8; eye1Y += 22;
                    eye2X += 24; eye2Y += 22;
                } else if(direction.y === -1) { // up
                    eye1X += 8; eye1Y += 10;
                    eye2X += 24; eye2Y += 10;
                }
                
                ctx.beginPath();
                ctx.arc(eye1X, eye1Y, 3, 0, 2 * Math.PI);
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(eye2X, eye2Y, 3, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
    
    function triggerGameOver() {
        gameOver = true;
        gameOverScreen.classList.add('active');
    }
    
    window.addEventListener('keydown', e => {
        // Only prevent default if modal is active and it's an arrow key/wasd to stop scrolling
        if (!modal.classList.contains('active')) return;
        
        if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
        
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (direction.y !== 1) nextDirection = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (direction.y !== -1) nextDirection = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (direction.x !== 1) nextDirection = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (direction.x !== -1) nextDirection = { x: 1, y: 0 };
                break;
        }
    });
    
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', e => {
        if (!modal.classList.contains('active')) return;
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: false });

    window.addEventListener('touchmove', e => {
        if (!modal.classList.contains('active')) return;
        e.preventDefault(); // Prevent scrolling while playing
    }, { passive: false });

    window.addEventListener('touchend', e => {
        if (!modal.classList.contains('active')) return;
        let touchEndX = e.changedTouches[0].screenX;
        let touchEndY = e.changedTouches[0].screenY;
        
        let dx = touchEndX - touchStartX;
        let dy = touchEndY - touchStartY;
        
        if (Math.abs(dx) > 30 || Math.abs(dy) > 30) {
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0 && direction.x !== -1) nextDirection = { x: 1, y: 0 };
                else if (dx < 0 && direction.x !== 1) nextDirection = { x: -1, y: 0 };
            } else {
                if (dy > 0 && direction.y !== -1) nextDirection = { x: 0, y: 1 };
                else if (dy < 0 && direction.y !== 1) nextDirection = { x: 0, y: -1 };
            }
        }
    });
    
    restartBtn.addEventListener('click', initGame);
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        gameOver = true; // pause game
    });
    
    footerLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, document.body.scrollHeight); // ensure we don't accidentally navigate
        modal.classList.add('active');
        snakeSpeed = 120;
        initGame();
    });
});
