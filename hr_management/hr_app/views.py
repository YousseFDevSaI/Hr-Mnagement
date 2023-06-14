
from .models import Branch, Employee
from .serializers import BranchSerializer, EmployeeSerializer
from rest_framework import viewsets


class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
