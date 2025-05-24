<script>
    let isButtonDisabled = false;

    const text = "This is a SvelteKit application!";

    const firstPage = '/about';
    const secondPage = '/about/company';

    const weekNumber = 5;
    const numbers = [1, 2, 3, 4, 5];
</script>


<h1>Home Page</h1>
<p>Welcome to the home page of our SvelteKit application!</p>

<button disabled={isButtonDisabled}>Click me!</button>
<p>{text}</p>

<div>
    <a href={firstPage}>Read about us:{firstPage}</a>
</div>

<div>
    <a href={secondPage}>Read about our company:{secondPage}</a>
</div>

<p></p>



<style>
    button {
        background-color: blue;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding-bottom: 8px;
    }
</style>


{#if weekNumber === 1}
    <h2>Week {weekNumber}:</h2>
    <p>We are learning SvelteKit!</p>
{:else if weekNumber === 5}
    <h2>Week {weekNumber}:</h2>
    <p>We are learning Svelte!</p>
{:else}
    <p>Almost Done!</p>
{/if}


{#each numbers as number}
    <p>Number: {number}</p>
{/each}