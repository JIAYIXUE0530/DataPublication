<script>
    let message = "Hello, visitor!";
  
    function handleClick() {
      message = "Thanks for clicking!";
    }
  </script>
  
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website</h1>
    <p class="text-lg text-gray-700 mb-6">{message}</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
      on:click={handleClick}
    >
      Click me!
    </button>
  </div>