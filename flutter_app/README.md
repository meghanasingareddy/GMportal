# Flutter Mobile App (Extension)

This directory is a placeholder for the Flutter mobile application for GM Portal.

## Features

The Flutter app would have the following features:

-   A "Good Morning" greeting screen similar to the web application.
-   A form with fields for Name, Phone Number, and Email Address.
-   Client-side validation for the form fields.
-   Submission of the form data to the same backend REST API used by the web application (`http://localhost:5000/api/submit`).
-   Display of success or error messages to the user based on the API response.

## Implementation Details

-   **HTTP Requests:** The app would use the `http` package in Flutter to make POST requests to the backend.
-   **State Management:** A state management solution like `Provider` or `Riverpod` would be used to manage the form state and the response from the API.
-   **UI:** The UI would be built using Flutter's widget system to create a user-friendly and responsive layout.

## Running the App

To run the app, you would need to have the Flutter SDK installed.

1.  **Clone the repository and navigate to this directory.**
2.  **Run the app:**
    ```bash
    flutter run
    ```
This would launch the app on a connected device or emulator.
