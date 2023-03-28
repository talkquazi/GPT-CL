

// Create a function called helloWorld
function helloWorld() {
  // Print out the string "Hello World!"
  console.log("Hello World!");
}

// Run the helloWorld function
helloWorld();

// If Dev Env Hello World Function Test
if (process.env.NODE_ENV === "development") {
  // Create a test for the helloWorld function
  test("helloWorld function", () => {
    // Call the helloWorld function
    helloWorld();

    // Assert that the console.log was called with the string "Hello World!"
    expect(console.log).toHaveBeenCalledWith("Hello World!");
  });
}