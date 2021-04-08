jQuery(document).ready(function () {
    let abv = $(".abv");
    abv.ionRangeSlider({
        prefix: "%",
        min: 0.0,
        max: 15,
        from: 0,
        step: 0.1,
        max_postfix: "+"
    });

    let ibu = $(".ibu");
    ibu.ionRangeSlider({
        prefix: "",
        min: 0,
        max: 100,
        from: 0,
        step: 0.5,
        max_postfix: "+"
    });

    let og = $(".og");
    og.ionRangeSlider({
        prefix: "",
        min: 1000,
        max: 1200,
        from: 1000,
        step: 10,
        max_postfix: "+"
    });
})