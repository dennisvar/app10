let items = []

function addItem(n,p) {
	items.push({n,p})
	printReceipt()
}

function printReceipt() {
	let r = document.getElementById('receipt')
	let t = 0
	let o = ""

	items.forEach(i => {
		o += `${i.n} $${i.p.toFixed(2)}<br>`
		t += i.p
	})

	r.innerHTML = o
	r.innerHTML += `<br>total: $${t.toFixed(2)}`
}
