import IMask from 'imask';

function fire(el, name, detail) {
	const e = new CustomEvent(name, { detail });
	el.dispatchEvent(e);
}

export default function(node, options) {

	let imask;

	function destroy() {
		imask && imask.destroy();
	}

	function update(options) {
		if ( ! options) return imask && destroy();
		if (imask) return imask.updateOptions(options);
		imask = new IMask(node, options);
		imask.on('accept', () => fire(node, 'accept', imask));
		imask.on('complete', () => fire(node, 'complete', imask));
	}

	update(options);

	return { update, destroy };
}
