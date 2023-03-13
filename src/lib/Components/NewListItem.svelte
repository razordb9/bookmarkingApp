<script lang="ts">
	import Incrementer from '$lib/Components/Incrementer.svelte';
	import Decrementer from '$lib/Components/Decrementer.svelte';
	import { count } from '$lib/Components/store.js';

	export let showNewListItem; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showNewListItem) dialog.showModal();

	function getData() {
		let name = (document.getElementById("name") as HTMLInputElement).value;
		let url = (document.getElementById("url") as HTMLInputElement).value;
		let beschreibung = (document.getElementById("beschreibung") as HTMLInputElement).value;

		console.log("values are: " + name + " " + url + " " + beschreibung);
	}

	const addToStore = () => {
		$count = [...$count,
			{
				"Name" : (document.getElementById("name") as HTMLInputElement).value,
				"Beschreibung" : (document.getElementById("beschreibung") as HTMLInputElement).value,
				"URL" : (document.getElementById("url") as HTMLInputElement).value,
			}
		];
		document.getElementById("newListItem").reset();
		dialog.close();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events 
    on:click|self={() => dialog.close()} -> If you click outside the dialog window will close itself
-->
<dialog
	bind:this={dialog}
	on:close={() => (showNewListItem = false)}
>
	<div on:click|stopPropagation>
		<h2 >
            Add new Bockmark Item
        </h2>
        <form id="newListItem">
            <label for="name">Name</label>
			<input id="name" type="text" required><br>
			
			<label for="url">URL</label>
            <input id="url" type="text" required><br>

			<label for="beschreibung">Beschreibung</label>
            <input id="beschreibung" type="text" required>

			<button on:click={addToStore}>save</button>
		</form>
		<!-- <hr /> -->
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <Incrementer/>
		<Decrementer/> -->
        <button autofocus on:click={() => dialog.close()}>close</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
