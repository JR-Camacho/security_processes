# Security Processes

Security Processes is a project that provides tools for spam detection and network flow classification. It consists of three main modules: ML (Machine Learning), API (Django REST Framework), and client_side (React + Vite). Each module serves a specific purpose in the overall functionality of the project.

## Modules

The project is organized into the following modules:

1. ML (Machine Learning):
   - Responsible for training models, visualizing data, and processing.
   - Developed in Python using a virtual environment (venv).
   - Required packages are listed in the `requirements.txt` file.

2. API (Django REST Framework):
   - Implements the API endpoints for the project.
   - Built with Django and Django REST Framework.
   - Provides communication between the client-side application and the ML module.

3. client_side (React + Vite):
   - Contains the client-side application interface.
   - Developed with React and Vite, providing a user-friendly experience.
   - Allows users to perform spam detection and network flow classification tasks.

## Download

To download the Security Processes project, follow these steps:

1. Clone the repository:

   ```shell
   git clone git@github.com:JR-Camacho/security_processes.git
   ```

2. Navigate to the project directory:

   ```shell
   cd security_processes
   ```

   You will find the ML, API, and client_side modules in the respective directories.

## Usage

To use the Spam Detection App, follow these steps:

1. Open the app in a web browser.
    ```shell
   https://jota-security.netlify.app/
   ```

3. On the home page, you will find an input field where you can enter the email content.

4. Enter the email in the following format: "From: Subject". Alternatively (recomented), you can upload a plain text document (.txt) or an email file (.eml) downloaded from an email provider like Gmail. 

Example: 
 ```shell
From: john.doe@example.com
To: jane.smith@example.com
Subject: Regarding the meeting


Hi Jane, I hope you're doing well. I wanted to discuss the details of our upcoming meeting scheduled for next week. Let's connect soon to go over the agenda and finalize the arrangements.

   
Best regards,
John
   ```

5. Click the "Analize" button or press the enter key to initiate the spam detection classification.

6. The application will process the input email and provide the corresponding prediction results.

7. Review the output displayed on the screen to determine whether the email is classified as spam.

8. You can repeat the process by entering additional emails.

## Contact

If you have any questions or suggestions regarding the Security Processes project, feel free to contact us:

- Name: [Jose Camacho]
- Email: [josecamachoc0303@gmail.com]
