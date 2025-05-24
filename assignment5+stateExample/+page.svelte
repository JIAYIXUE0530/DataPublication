<script>
	let firstNumber = $state(0);
	let secondNumber = $state(0);
	let thirdNumber = $state(3);

	const total = $derived(firstNumber + secondNumber);

	function updateNumber() {
		thirdNumber = thirdNumber + 1;
	}

	$inspect('firstNumber', firstNumber);
	$inspect('secondNumber', secondNumber);
	$inspect('thirdNumber', thirdNumber);
</script>

<h1>Numbers</h1>

<div>
	<label for="first-number">First number</label>
	<input id="first-number" type="number" bind:value={firstNumber} />

	<label for="second-number">Second number</label>
	<input id="second-number" type="number" bind:value={secondNumber} />
</div>
<br />
<div>
	First number is: {firstNumber}
	Second number is: {secondNumber}
</div>
<br />
<div>The total amount is: {total}</div>
<br />
<br />
<br />
<div>Third number: {thirdNumber}</div>
<button onclick={updateNumber}>Update third number</button>

--------------
<br />
<br />
<ul>
	{#each poems as poem}
		<li>{poem.title}</li>
		<li>{poem.lines}</li>
		<li>Number of lines: {poem.numberOfLines}</li>
		<li>Number of words: {poem.numberOfWords}</li>
		<br />
		<br />

	{/each}
</ul>
