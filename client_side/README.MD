# Security Process - Client Side

This module contains the client-side application built with React and Vite for the Security Process project.

## Requirements

- Node.js (version 18.16.0 or higher)
- Package manager (npm)

## Installation

1. Clone the Security Process repository:

   ```shell
   git clone git@github.com:JR-Camacho/security_processes.git
   ```

2. Navigate to the client_side module directory:

   ```shell
   cd security-processes/client_side
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Configuration

1. Rename the `.env.example` file to `.env` and update the necessary configuration variables.
   -VITE_API_URL= (it's the api url like: 127.0.0.1:8000/api)

2. Start the development server:

   ```shell
   npm run dev
   ```

   The client-side application will be accessible at `http://localhost:{PORT}/`.

## Usage

The client-side application allows users to detect spam by providing text input or uploading a plain text file.

1. Enter the text directly into the input field or click on the "Upload" button to select a plain text file.

2. Click on the "Analize" button to initiate the spam detection process.

3. The application will analyze the provided text and display the result, indicating whether it is classified as spam or not.

## Folder Structure

The folder structure of the client_side module is as follows:

- `src/`: Source code directory.
- `src/components/`: Directory containing reusable React components.
- `src/pages/`: Directory containing individual pages or views of the application.
- `src/hooks/`: Directory custom hooks
- `src/utils/`: Directory containing utility/helper functions.
- `src/layouts/`: Directory containing the app layouts.
- `src/routes/`: Directory containing the routes settings.

## Contact

If you have any questions or suggestions regarding the client-side module of Security Process, feel free to contact us:

- Name: [Jose Camacho]
- Email: [josecamachoc0303@gmail.com]