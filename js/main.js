document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const experienceList = document.querySelector('.experience-list');
    const swiperSlide = experienceList.closest('.swiper-slide'); // Get parent slide
    const swiperContainer = document.querySelector('.swiper'); // Get Swiper container

    const initialHeight = 96; // Adjust this for the collapsed height
    let isExpanded = true;

    // Set initial state
    experienceList.style.maxHeight = initialHeight + 'px';
    experienceList.style.overflow = 'hidden';
    experienceList.style.transition = 'max-height 0.3s ease-out';

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isExpanded = !isExpanded;

        if (isExpanded) {
            experienceList.style.maxHeight = experienceList.scrollHeight + 'px';
            readMoreBtn.textContent = 'read less';
        } else {
            experienceList.style.maxHeight = initialHeight + 'px';
            readMoreBtn.textContent = 'read more';
        }

        // Delay the height recalculation slightly for smooth animation
        setTimeout(() => {
            swiperSlide.style.height = isExpanded ? swiperSlide.scrollHeight + 'px' : 'auto';
            swiperContainer.style.height = isExpanded ? swiperContainer.scrollHeight + 'px' : 'auto';
        }, 300);
    });
});
