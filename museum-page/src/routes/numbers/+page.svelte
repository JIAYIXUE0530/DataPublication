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
    <label for="first-number">First Number</label>
    <input type="number" id="first-number" bind:value={firstNumber}>

    <label for="second-number">Second Number</label>
    <input type="number" id="second-number" bind:value={secondNumber}>
</div>
<br />
<div>
    First number is: {firstNumber}
    <br />
    Second number is: {secondNumber}
</div>
<br>
<div>The total amount is: {total}</div>
<br>
<br>
<br>
<div>Third number: {thirdNumber}</div>
<button onclick={updateNumber}>Update third number</button>