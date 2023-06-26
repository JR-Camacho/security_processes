from predictor_app.utils.parser_email import Parser

import numpy as np
import pickle
import joblib
import os

VECTORIZER_PATH = os.path.join(os.path.dirname(__file__), '..', 'ml_models/spam_detection/vectorizer', 'vectorizer.pkl')
MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'ml_models/spam_detection/logistic_regression', 'spam_ham_detection.pkl')

with open(VECTORIZER_PATH, 'rb') as f:
    vectorizer = pickle.load(f)

model = joblib.load(MODEL_PATH)

def process_email(email):
    parser = Parser()
    parse_email = parser.parse(email)
    joined_email = np.array([" ".join(parse_email['subject']) + " ".join(parse_email['body'])])
    vectorize_email = vectorizer.transform(joined_email)
    return vectorize_email.toarray()

def make_email_prediction(email):
    return model.predict(process_email(email))