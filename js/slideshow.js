$(document).ready(function () {
    $('.body_content').fadeIn("slow");
    let curSlideIndex = 1;

    function show_slide(index) {
        let slides = $(".my_slide");

        let slide_count = slides.length;
        if(index > slide_count)
            curSlideIndex = 1;

        if(index < 1)
            curSlideIndex = slide_count;

        slides.hide();
        $(".category_container").hide();
        let slide = $(slides[curSlideIndex-1]);
        slide.fadeIn("slow");
        $(slide.attr('data-header')).fadeIn("slow");
        $(slide.attr('data-info')).fadeIn("slow");
    }

    $(".slide_btn_prev").click(show_previous_slide);
    $(".slide_btn_next").click(show_next_slide);

    function show_next_slide() {
        show_slide(++curSlideIndex);
    }

    function show_previous_slide() {
        show_slide(--curSlideIndex);
    }

    show_slide(curSlideIndex);
});