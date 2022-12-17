$(document).ready(function ()
{
    // To filter out articles
    $(".filter").click(function ()
    { 
        const value = $(this).attr("data-title");

        if (value === "All")
        {
            $(".article").show("1000");
        }
        else
        {
            $(".article").not("." + value).hide("1000");
            $(".article").filter("." + value).show("1000");
        }
    });

    $(".filter").click(function ()
    { 
        $(".filter").removeClass("active");
        $(this).addClass("active");
    });
});