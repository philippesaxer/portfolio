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
