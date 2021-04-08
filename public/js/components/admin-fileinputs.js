jQuery(document).ready(function () {
    $("#avatar").fileinput({
        browseClass: "btn btn-secondary",
        browseIcon: "<i class='icon-search'></i>",
        removeClass: "btn btn-danger",
        removeLabel: "",
        removeIcon: "<i class='icon-trash-alt1'></i>",
        showUpload: false
    });

    $("#gallery").fileinput({
        browseClass: "btn btn-secondary",
        browseIcon: "<i class='icon-search'></i>",
        removeClass: "btn btn-danger",
        removeLabel: "",
        removeIcon: "<i class='icon-trash-alt1'></i>",
        showUpload: false
    });
})