<script>
   let myNumber = $state(0);
   
   const myNumberTwice = $derived(myNumber * 2);

   function increaseNumber() {
    myNumber = myNumber + 1;
   }

   $effect(() => {
    if (myNumber > 0) {
        alert(`My new number is ${myNumber}!`);
    }
   });
</script>

<h1>My number</h1>

<div>My number is: {myNumber}</div>

<br>

<div>Twice my number is:{myNumberTwice}</div>
<button onclick={increaseNumber}>Click here to increase</button>