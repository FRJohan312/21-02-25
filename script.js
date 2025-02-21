$j("#messageState").on("change", (x) => {
	$j(".message").removeClass("openNor").removeClass("closeNor");
	if ($j("#messageState").is(":checked")) {
		$j(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$j(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$j(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");
	} else {
		$j(".message").removeClass("no-anim").addClass("closeNor");
		$j(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$j(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$j(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($j(".message").hasClass("closeNor"))
		$j(".message").addClass("closed");
	$j(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
	
});

$j(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$j(".heart").hasClass("closeHer"))
		$j(".heart").addClass("openedHer").addClass("beating");
	else
		$j(".heart").addClass("no-anim").removeClass("beating");
	$j(".heart").removeClass("openHer").removeClass("closeHer");

});

$j(document).ready(function () {
    const heartsContainer = $j("<div class='hearts-container'></div>");
    $j(".container").append(heartsContainer);

    let interval;

    $j("#messageState").on("change", function () {
        if ($j(this).is(":checked")) {
            startHeartsAnimation();
        } else {
            stopHeartsAnimation();
        }
    });

    function startHeartsAnimation() {
        interval = setInterval(() => {
            let heart = $j("<span class='floating-heart'>❤️</span>");
            let randomSize = Math.random() * 15 + 10; // Tamaño aleatorio entre 10px y 25px
            heart.css({
                left: Math.random() * 100 + "vw",
                fontSize: randomSize + "px",
                animationDuration: Math.random() * 3 + 2 + "s",
            });

            heartsContainer.append(heart);

            heart.on("animationend", function () {
                $j(this).remove(); // Elimina el corazón al salir de la pantalla
            });
        }, 500); // Aparece un corazón cada 500ms
    }

    function stopHeartsAnimation() {
        clearInterval(interval);
        $j(".floating-heart").remove(); // Elimina todos los corazones cuando se cierra la carta
    }
});




