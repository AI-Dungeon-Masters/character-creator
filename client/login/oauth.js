window.onload = () => {
    google.accounts.id.initialize({
        client_id: "320237385712-lvh467lg2cq37icjj6j4ommeom53t4uk.apps.googleusercontent.com", // Replace with your Google Client ID
        //login_uri: "http://localhost:8080",
        callback: (response) => {
            location.href = '/';
            console.log(response);
        };
        // We choose to handle the callback in client side, so we include a reference to a function that will handle the response
    });
    // You can skip the next instruction if you don't want to show the "Sign-in" button
    google.accounts.id.renderButton(
        document.getElementById("oauth"), // Ensure the element exist and it is a div to display correcctly
        { theme: "outline", size: "large" }  // Customization attributes
    );
    google.accounts.id.prompt(); // Display the One Tap dialog

}
const gitAuth = () => {
    // fetch
    console.log('gitAuth');
};