from rest_framework import viewsets
from rest_framework.response import Response

from .services.make_prediction import make_email_prediction

# Create your views here.

class SpamDetectorViewSet(viewsets.ViewSet):
     def create(self, request):
        email = request.data.get("email")
        email.strip()
        email_content_quoted = f'"{email}"'

        prediction = make_email_prediction(email_content_quoted)
        return Response(prediction)
