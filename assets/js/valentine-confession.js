$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
	
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");

});

$(document).ready(function () {
    const heartsContainer = $("<div class='hearts-container'></div>");
    $(".container").append(heartsContainer);

    let interval;

    $("#messageState").on("change", function () {
        if ($(this).is(":checked")) {
            startHeartsAnimation();
        } else {
            stopHeartsAnimation();
        }
    });

    function startHeartsAnimation() {
        interval = setInterval(() => {
            let heart = $("<span class='floating-heart'>❤️</span>");
            let randomSize = Math.random() * 15 + 10; // Tamaño aleatorio entre 10px y 25px
            heart.css({
                left: Math.random() * 100 + "vw",
                fontSize: randomSize + "px",
                animationDuration: Math.random() * 3 + 2 + "s",
            });

            heartsContainer.append(heart);

            heart.on("animationend", function () {
                $(this).remove(); // Elimina el corazón al salir de la pantalla
            });
        }, 500); // Aparece un corazón cada 500ms
    }

    function stopHeartsAnimation() {
        clearInterval(interval);
        $(".floating-heart").remove(); // Elimina todos los corazones cuando se cierra la carta
    }
});




