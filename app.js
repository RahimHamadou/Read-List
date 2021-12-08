// // utilisation d'une API
// const titre = document.querySelector(".titre");
// const liste = document.querySelector(".ul");

// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then((response) => response.json())
// 	.then((data) => {
// 		for (i = 0; i < data.length; i++) {
// 			let newLi = document.createElement("li");
// 			let newTitre = document.createElement("h2");
// 			let newBody = document.createElement("p");

// 			newTitre.innerHTML = data[i].title;
// 			newBody.innerHTML = data[i].description;

// 			newLi.appendChild(newTitre);
// 			newLi.appendChild(newBody);
// 			liste.appendChild(newLi);
// 		}
// 	});

// manipulation d'objet
// const caisse = {
// 	marque: "ford",
// 	annee: 2020,
// 	couleur: "noire",
// 	edition: "luxe",
// 	rouler() {
// 		console.log("Vroum");
// 		console.log(this.annee);
// 	},
// };

// caisse.rouler();

// // afficher les keys d'un objet
// console.log(Object.keys(caisse));

// // afficher les valeurs de keys d'un objet
// console.log(Object.values(caisse));

// // savoir si un objet a une prop
// console.log(caisse.hasOwnProperty("annee"));

// // creation d'objets avec class
// const carDes = document.querySelector(".car");
// const carList = document.querySelector(".carList");

// class Cars {
// 	constructor(marque, annee, option) {
// 		this.marque = marque;
// 		this.annee = annee;
// 		this.option = option;
// 	}
// 	rajoutOptions(nomOption) {
// 		this.option++;
// 		console.log(`Rajout de ${nomOption}, nombre d'option : ${this.option}`);
// 		return this;
// 	}
// 	retraitOptions() {
// 		this.option--;

// 		let nvDate = new Date();
// 		console.log(`une option enlevée le ${nvDate} , le nombre d'option est de ${this.option}`);
// 	}
// 	dateSortie() {
// 		console.log(`date de sortie de la voiture ${this.marque} est ${this.annee}`);
// 	}
// }
// const voiture1 = new Cars("fiat", 2021, 0);
// const voiture2 = new Cars("toyota", 2010, 0);
// const voiture3 = new Cars("audi", 2014, 0);
// console.log(voiture1, voiture2, voiture3);

// voiture1.dateSortie();
// voiture2.dateSortie();
// voiture3.dateSortie();

// PROJET LIVRE

// declaration des elements
const container = document.querySelector(".container");
const bookForm = document.querySelector(".book-form");
const bookList = document.querySelector(".book-list");

// creation du constructor de Book
class Book {
	constructor(titre, auteur, annee) {
		this.titre = titre;
		this.auteur = auteur;
		this.annee = annee;
	}

	// methode pour ajouter un livre
	addBookToList(book) {
		// creation d'une rangée
		const row = document.createElement("tr");
		row.innerHTML = `
		<td>${book.titre}</td>
		<td>${book.auteur}</td>
		<td>${book.annee}</td>
		<td>
		<button class= "delete">X</button>
		</td>
		`;
		// ajout de la ligne a la bonne section
		bookList.appendChild(row);
	}

	clearFiedls() {
		document.querySelector("#titre").value = "";
		document.querySelector("#auteur").value = "";
		document.querySelector("#annee").value = "";
	}

	// on cree une div tout en haut de la page qui affiche une alerte
	showAlert(message, className) {
		const alert = document.createElement("div");
		// on lui donne une class
		alert.className = `alert ${className} `;
		alert.appendChild(document.createTextNode(message));
		container.insertBefore(alert, bookForm);

		// on retire l'alerte au bout de 2500 ms
		setTimeout(() => {
			document.querySelector(".alert").remove();
		}, 1500);
	}
}

// class lié aux methodes de l'interface , ici la suppression
class Interface {
	// suppression d'un element par la verification de className
	deleteBook(target) {
		if (target.className === "delete") {
			target.parentElement.parentElement.remove();
		}
	}
}

//ecoute du bouton submit pour l'ajout de livre
bookForm.addEventListener("submit", (e) => {
	// empeche le comportement par defaut du bouton
	e.preventDefault();

	// creation de constante depuis le form
	const titre = document.querySelector("#titre").value;
	const auteur = document.querySelector("#auteur").value;
	const annee = document.querySelector("#annee").value;

	// creation du livre
	const book = new Book(titre, auteur, annee);

	// condition si on a pas mis de required sur les inputs
	if (titre === "" || auteur === "" || annee === "") {
		book.showAlert("Remplissez les champs! ", "error");
	} else {
		// appel de la fonction pour ajouter les livres
		book.addBookToList(book);
		book.clearFiedls();
		book.showAlert("Livre ajouté! ", "success");
	}
});
// ecoute du bouton delete pour retirer un livre

bookList.addEventListener("click", (e) => {
	// appel des methodes de la class Interface
	const ui = new Interface();
	ui.deleteBook(e.target);
});

// PROJET LIVRE
