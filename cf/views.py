from django.shortcuts import render


def weakness(request):
    return render(request, "cf/weakness.html")

def strength(request):
    return render(request, "cf/strength.html")

def home(request):
    return render(request, "cf/discover.html")

def register(request):
    return render(request, "cf/register.html")

def methodology(request):
    return render(request, "cf/methodology.html")

def resources(request):
    return render(request, "cf/resources.html")


def testimony(request):
    return render(request, "cf/testimony.html")