# Security Process - ML Module

This module is responsible for training models, visualizing data, processing, and exporting the models used in the Security Process project.

## Requirements

- Python 3.x
- Virtual environment (virtualenv)
- Required packages (see `requirements.txt`)

## Dataset

For the training and evaluation of the models, we used the following datasets:

   1. **Dataset for SPAM Email Detection:**
      - Link: [SPAM Email Dataset](https://plg.uwaterloo.ca/cgi-bin/cgiwrap/gvcormac/foo07)
      - Description: This dataset contains labeled email samples, including spam and non-spam (ham), which were used to train our spam detection model. It plays a crucial role in building a robust classifier to identify and filter out unwanted emails.

   2. **Dataset for Malicious URLs Detection:**
      - Link: [Malicious URLs Dataset](https://www.unb.ca/cic/datasets/url-2016.html)
      - Description: This dataset comprises URLs labeled as malicious or benign, which were employed to train our model for detecting malicious URLs. It helps us enhance the security of web applications and networks by identifying potentially harmful links.

## Installation

1. Clone the Security Process repository:

   ```shell
   git clone git@github.com:JR-Camacho/security_processes.git
   ```

2. Navigate to the ML module directory:

   ```shell
   cd security-processes/ml
   ```

3. Create a virtual environment (optional but recommended):

   ```shell
   python3 -m venv venv
   source venv/bin/activate
   ```

4. Install the required packages:

   ```shell
   pip install -r requirements.txt
   ```

## Directory Structure

- `data/`: Directory containing the datasets used for model training.
- `models/`: Directory to store the trained models.
- `src/`: Directory containing all the code and modules.

## Contact

If you have any questions or suggestions regarding the ML module of Security Process, feel free to contact us:

- Name: [Jose Camacho]
- Email: [josecamachoc0303@gmail.com]