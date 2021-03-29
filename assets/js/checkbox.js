$("input[type=checkbox]").click(function () {
	execute(this);
	verify(this);
});

$("#quantity-bg").hide();

function execute(evt) {
	let id = evt.id;

	let element = document.getElementById(id);
	let checked = element.checked;

	$("#" + element.parentElement.id).toggleClass("markedBox", checked);

	if (!checked) {
		$("#quantity-" + element.parentElement.id).parent().remove();
	} else {
		let item = items.find((x) => x.id === element.parentElement.id);
		if (item.quantity) {
			$("#quantity-bg").show();
			$("#quantity-items").append(`
				<label class="result mr-2">Quantidade de ${item.itemName}: <input tabindex="2" class="result-box" id="quantity-${element.parentElement.id}" type="text" placeholder="Quantidade"></label>
			`);
		}
	}

	if ($("#quantity-items").children().length == 0) {
		$("#quantity-bg").hide();
	} else {
		$("#quantity-bg").show();
	}
}

function verify() {
	var markeds = [];
	for (let element of document.getElementsByClassName("markedBox")) {
		markeds.push(element);
	}

	var motivosArray = [];

	var pena = 0;
	var multa = 0;
	for (let element of markeds) {
		let id = element.id;
		let item = items.find((x) => x.id === id);

		motivosArray.push(item.name);
		multa += item.multa || 0;
		pena += item.pena || 0;

		if (item.quantity) {
			let quantidadeItem = $(`#quantity-${id}`).val() || 0;
			for (let iii = 0; quantidadeItem >= item.quantity; iii++) {
				quantidadeItem -= item.quantity;

				if (iii == 0) continue;

				pena += item.pena_per_quantity || 0;
				multa += item.multa_per_quantity || 0;
			}
		}
		// <label class="result mr-2">Quantidade de ${item.itemName}: <input tabindex="2" class="result-box" id="quantity-completeid" type="text" placeholder="Quantidade"></label>
	}

	var motivos = motivosArray.join(", ");
	if (lastReducaoDePena != 0) {
		pena = pena - pena * (lastReducaoDePena / 100);
	}

	pena = Math.floor(pena);
	multa = Math.floor(multa);

	$("#reason-list").val(motivos);
	$("#user-fines").val("$" + multa);
	$("#user-pena").val(pena + " meses");

	$("#user-fines").addClass("fadeGreen");
	$("#user-pena").addClass("fadeGreen");

	setTimeout(function () {
		$("#user-fines").removeClass("fadeGreen");
		$("#user-pena").removeClass("fadeGreen");
	}, 1100);
}

function copyToClipboard(element) {
	$(element).select();
	document.execCommand("copy");
}

var lastReducaoDePena = 0;
setInterval(function () {
	if (document.visibilityState == "visible") {
		let reducaoDePena = $("#pena-reducao").val() || 0;
		if (reducaoDePena !== lastReducaoDePena) {
			lastReducaoDePena = reducaoDePena;
		}
		verify();
	}
}, 2300);
