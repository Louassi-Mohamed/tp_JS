'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
// console.log(message);

function onLoad() {
	// console.log('In onLoad() function…');
	// Your JavaScript code goes here !
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	lengthH2();
	swapInnerHTML();
	dateAlter();
	getNbDays();
	//updateClock1;
	// updateClock2();
	// //updateClock3();
	// updateGraphicClock;
	// updateGraphicClock1;
	// console.log("Le bouton de recherche a été cliqué!");
	// let btnSearch = document.getElementById("btnsearch");
	// btnSearch.addEventListener('click', search);
	const btRecherche = document.getElementById("btnsearch");
    btRecherche.addEventListener("click", onBtRechercheClick);

    function onBtRechercheClick() {
        const searchInput = document.getElementById("inputSearch");

        // Ajouter un écouteur d'événement pour le clic sur le bouton de recherche
        const searchText = searchInput.value.trim();
        console.log(searchText);
        // Si le texte est vide, ne rien faire
        if (searchText.length === 0) {
            return;
        }

        // Vérifier si le contenu original de la page a déjà été sauvegardé
        if (originalContent === null) {
            // Si ce n'est pas le cas, sauvegarder le contenu du corps de la page
            originalContent = document.body.innerHTML;
        }

        // Créer un nouvel élément div pour contenir le contenu original de la page
        const originalContentDiv = document.createElement('div');
        originalContentDiv.innerHTML = originalContent;

        // Chercher le texte souhaité dans toute la page à l'aide d'une expression régulière
        const regex = new RegExp(searchText, 'gi');
        const matches = originalContentDiv.innerHTML.match(regex);

        // Si des correspondances sont trouvées...
        if (matches !== null) {
            for (let i = 0; i < matches.length; i++) {
                const match = matches[i];
                // Remplacer chaque occurrence du texte par une balise <span> avec la classe CSS "select"
                originalContentDiv.innerHTML = originalContentDiv.innerHTML.replace(
                    new RegExp(match, 'g'),
                    '<span class="surligner">' + match + '</span>'
                );
            }
        }

        // Remplacer le contenu du corps de la page par le contenu de la nouvelle div
        document.body.innerHTML = originalContentDiv.innerHTML;
        console.log("Le bouton de recherche a été cliqué!");
	}
}

const defineHeading1 = () => {
	let titleElement = document.getElementById("title");
	if (titleElement) {
		document.title = titleElement.textContent;
	}
}

document.addEventListener("DOMContentLoaded", defineHeading1);


const defineHeading2 = () => {
	let h2 = document.getElementsByTagName("h2");
	if (h2.length != 0) {
		document.title = h2[h2.length - 1].textContent;
	}

}

document.addEventListener("DOMContentLoaded", defineHeading2);

const defineHeading3 = () => {
	let h2 = document.getElementsByTagName("h2");
	if (h2.length == 0) {
		document.title = "Louassi Mohamed";
	}
}

document.addEventListener("DOMContentLoaded", defineHeading3);

const lengthH2 = () => {
	let h2 = document.getElementsByTagName("h2");
	// console.log('Le nombre de h2 est de ' + h2.length);
}

document.addEventListener("DOMContentLoaded", lengthH2);


const defineHeading4 = () => {
	let firstOrLast = document.getElementsByClassName("firstOrLast");
	let numberOfElements = firstOrLast.length;
	if (numberOfElements != 0) {
		if (numberOfElements % 2 == 0) {
			document.title = firstOrLast[0].textContent;
		}
		else {
			document.title = firstOrLast[numberOfElements - 1].textContent;
		}
	}
}

document.addEventListener("DOMContentLoaded", defineHeading4);

const swapInnerHTML = () => {
	let switcherP = document.getElementsByTagName("p");
	if (switcherP.length > 1) {
		let p1 = switcherP[0].textContent
		let temp = p1
		let p2 = switcherP[1].textContent
		document.getElementsByTagName("p")[0].innerHTML = p2
		document.getElementsByTagName("p")[1].innerHTML = temp
	}
}

const dateAlter = () => {
	let div = document.getElementById("update-date");
	let date = new Date().toLocaleDateString();
	let content;
	let metaTags = document.getElementsByTagName('meta');
	for (let i = 0; i < metaTags.length; i++) {
		if (metaTags[i].getAttribute("name") === "author") {
			content = metaTags[i].getAttribute("content");
		}
	}
	div.innerHTML = "<p>Dernière modification : le " + date + " par " + content + "</p>";
}

const getNbDays = () => {
	//let div = document.querySelector('div');
	//let getDay = div.querySelector('#getNbDay');
	let getDay = document.getElementById("getNbDay");
	let date = new Date();
	let date1 = new Date("2023-07-19");
	let diff = Math.ceil((date1 - date) / (1000 * 60 * 60 * 24));
	// console.log(date)
	// console.log(date1)
	// console.log(diff)
	if (diff === 1) {
		getDay.innerHTML = "<p>Il reste" + diff + " jour avant le " + date1 + "</p>";
	} else {
		getDay.innerHTML = "<p>Il reste " + diff + " jours avant le " + date1 + "</p>";
	}
}

// const updateClock1 = setInterval(function () {
// 	let heure = new Date();
// 	let hour = document.getElementById("heure");
// 	hour.innerHTML = "<p> Il est " + heure.getHours() + ":" + heure.getMinutes() + ":" + heure.getSeconds() + "</p>";
// }, 1000);



// const updateClock2 = () => {
// 	let heure = new Date();
// 	let hour = document.getElementById("heure1");
// 	hour.innerHTML = "<p> Il est " + heure.getHours() + ":" + heure.getMinutes() + ":" + heure.getSeconds() + "</p>";
// 	// console.log("heure:" + heure.getHours() + ":" + heure.getMinutes() + ":" + heure.getSeconds())
// 	setTimeout(function () {
// 		updateClock2()
// 	}, 1000);
// }

// const updateGraphicClock = setInterval(function () {
// 	let date = new Date();
// 	let hour = document.getElementById("heure");
// 	hour.innerHTML = "<p> Il est " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</p>";
// 	let heure = date.getHours().toString()
// 	let minute = date.getMinutes().toString()
// 	let sec = date.getSeconds().toString()
// 	hour.innerHTML = '<img src="assets/images/' + heure[0] + '.gif"> <img src="assets/images/' + heure[1] + '.gif">';
// 	hour.innerHTML += '<img src="assets/images/' + minute[0] + '.gif"> <img src="assets/images/' + minute[1] + '.gif">';
// 	hour.innerHTML += '<img src="assets/images/' + sec[0] + '.gif"> <img src="assets/images/' + sec[1] + '.gif">';
// }, 1000);



// const updateGraphicClock1 = setInterval(function () {
// 	let date = new Date();
// 	let hour = document.getElementById("heure");
// 	hour.innerHTML = "<p> Il est " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</p>";
// 	let heure = date.getHours().toString()
// 	let minute = date.getMinutes().toString()
// 	let sec = date.getSeconds().toString()

// 	if (heure[1] === undefined) {
// 	  heure = "0" + heure[0];
// 	}
// 	if (minute[1] === undefined) {
// 	  minute = "0" + minute[0];
// 	}
// 	if (sec[1] === undefined) {
// 	  sec = "0" + sec[0];
// 	}

// 	if (heure[1] === "0") {
// 	  heure = "0" + heure[0];
// 	}
// 	if (minute[1] === "0") {
// 	  minute = "0" + minute[0];
// 	}
// 	if (sec[1] === "0") {
// 	  sec = "0" + sec[0];
// 	}

// 	hour.innerHTML = '<img src="assets/images/' + heure[0] + '.gif"> <img src="assets/images/' + heure[1] + '.gif">';
// 	hour.innerHTML += '<img src="assets/images/' + minute[0] + '.gif"> <img src="assets/images/' + minute[1] + '.gif">';
// 	hour.innerHTML += '<img src="assets/images/' + sec[0] + '.gif"> <img src="assets/images/' + sec[1] + '.gif">';
//   }, 1000);



// const updateClock3 = () => {
// 	const heure = new Date();
// 	const hours = heure.getHours();
// 	const minutes = heure.getMinutes();
// 	const seconds = heure.getSeconds();

// 	// Récupérer chaque chiffre de l'heure, des minutes et des secondes
// 	const hour1 = Math.floor(hours / 10);
// 	const hour2 = hours % 10;
// 	const minute1 = Math.floor(minutes / 10);
// 	const minute2 = minutes % 10;
// 	const second1 = Math.floor(seconds / 10);
// 	const second2 = seconds % 10;

// 	// Définir le chemin d'accès pour chaque image
// 	const images = {
// 		0: 'assets/images/0.gif',
// 		1: 'assets/images/1.gif',
// 		2: 'assets/images/2.gif',
// 		3: 'assets/images/3.gif',
// 		4: 'assets/images/4.gif',
// 		5: 'assets/images/5.gif',
// 		6: 'assets/images/6.gif',
// 		7: 'assets/images/7.gif',
// 		8: 'assets/images/8.gif',
// 		9: 'assets/images/9.gif'
// 	};

// 	// Afficher les images correspondantes pour chaque chiffre
// 	document.getElementById('hour1').src = images[hour1];
// 	document.getElementById('hour2').src = images[hour2];
// 	document.getElementById('minute1').src = images[minute1];
// 	document.getElementById('minute2').src = images[minute2];
// 	document.getElementById('second1').src = images[second1];
// 	document.getElementById('second2').src = images[second2];

// 	// Actualiser l'heure toutes les secondes
// 	setTimeout(updateClock3, 1000);
// };


let monInput = document.getElementById('monInput');
monInput.addEventListener("input", function () {
	let value = monInput.value;
	if (value === "") {
		monInput.style.backgroundColor = "white";
	}
	else if (isNaN(value)) {
		monInput.style.backgroundColor = "red";
	}
	else {
		monInput.style.backgroundColor = "green";
	}
});

const plusIcons = document.querySelectorAll('.plus');

plusIcons.forEach(icon => {
	icon.addEventListener('click', () => {
		const deroulant = icon.closest('.deroulant');
		const ouvrir = deroulant.querySelector('.ouvrir');
		if (ouvrir) {
			if (ouvrir.classList.contains('visible')) {
				ouvrir.style.display = 'none';
				ouvrir.classList.remove('visible');
				icon.src = icon.src.includes('plus.gif') ? 'assets/images/minus.gif' : 'assets/images/plus.gif';
			} else {
				ouvrir.style.display = 'block';
				ouvrir.classList.add('visible');
				icon.src = icon.src.includes('minus.gif') ? 'assets/images/plus.gif' : 'assets/images/minus.gif';
			}
		} else {
			console.log('Le li "deroulant" ne contient pas ul class="ouvrir menu-ouvrir"');
		}
	});
});


// const search = () => {
// 	let buttonClicked = false;
// 	const btnSearch = document.getElementById("btnsearch");
// 	btnSearch.addEventListener("click", () => {
// 		const textInput = document.getElementById("inputSearch").value.trim();
// 		if (textInput.textContent != "") {
// 			if (!buttonClicked) {
// 				const bodyHTML = document.body.textContent;
// 				for (let i = 0; i < bodyHTML.length; i++) {
// 					if (bodyHTML[i] === textInput) {
// 						const span = document.createElement("span");
// 						span.textContent = textInput;
// 						span.classList.add("surligner");
// 						bodyHTML[i].parentNode.insertBefore(span, bodyHTML[i]);
// 						bodyHTML[i].remove();
// 					}
// 				}
// 				buttonClicked = true;
// 			}
// 			else {
// 				document.body.innerHTML = bodyHTML;
// 			  }
// 		}

// 	});
// };

// document.addEventListener("DOMContentLoaded", search);




let originalContent = null;

// let btRecherche = document.getElementById("btnsearch")
// function onBtRechercheClick() {
// 	const searchInput = document.getElementById("inputSearch");

// 	// Ajouter un écouteur d'événement pour le clic sur le bouton de recherche
// 	const searchText = searchInput.value.trim();
// 	console.log(searchText);
// 	// Si le texte est vide, ne rien faire
// 	if (searchText.length === 0) {
// 		return;
// 	}

// 	// Vérifier si le contenu original de la page a déjà été sauvegardé
// 	if (originalContent === null) {
// 		// Si ce n'est pas le cas, sauvegarder le contenu du corps de la page
// 		originalContent = document.body.innerHTML;
// 	} else {
// 		// Sinon, restaurer le contenu original en remplaçant le corps de la page par la valeur de originalContent
// 		document.body.innerHTML = originalContent;
// 	}

// 	// Chercher le texte souhaité dans toute la page à l'aide d'une expression régulière
// 	const regex = new RegExp(searchText, 'gi');
// 	const matches = document.body.innerHTML.match(regex);

// 	// Si des correspondances sont trouvées...
// 	if (matches !== null) {
// 		for (let i = 0; i < matches.length; i++) {
// 			const match = matches[i];
// 			// Remplacer chaque occurrence du texte par une balise <span> avec la classe CSS "select"
// 			document.body.innerHTML = document.body.innerHTML.replace(
// 				new RegExp(match, 'g'),
// 				'<span class="surligner">' + match + '</span>'
// 			);
// 		}
// 	}
// 	console.log("Le bouton de recherche a été cliqué!");
// }





// let originalContent = null;
// function search() {
// 	// Récupérer le champ de recherche
// 	const searchInput = document.getElementById("inputSearch");

// 	// Ajouter un écouteur d'événement pour le clic sur le bouton de recherche
// 	const searchText = searchInput.value.trim();
// 	console.log(searchText);
// 	// Si le texte est vide, ne rien faire
// 	if (searchText.length === 0) {
// 		return;
// 	}

// 	// Vérifier si le contenu original de la page a déjà été sauvegardé
// 	if (originalContent === null) {
// 		// Si ce n'est pas le cas, sauvegarder le contenu du corps de la page
// 		originalContent = document.body.innerHTML;
// 	} else {
// 		// Sinon, restaurer le contenu original en remplaçant le corps de la page par la valeur de originalContent
// 		document.body.innerHTML = originalContent;
// 	}

// 	// Chercher le texte souhaité dans toute la page à l'aide d'une expression régulière
// 	const regex = new RegExp(searchText, 'gi');
// 	const matches = document.body.innerHTML.match(regex);

// 	// Si des correspondances sont trouvées...
// 	if (matches !== null) {
// 		for (let i = 0; i < matches.length; i++) {
// 			const match = matches[i];
// 			// Remplacer chaque occurrence du texte par une balise <span> avec la classe CSS "select"
// 			document.body.innerHTML = document.body.innerHTML.replace(
// 				new RegExp(match, 'g'),
// 				'<span class="surligner">' + match + '</span>'
// 			);
// 		}
// 	}
// 	console.log("La fonction search() a été appelée!");
// }
