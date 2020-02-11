from django.contrib import admin
from .models import Book
# Register your models here.
from import_export.admin import ImportExportModelAdmin
@admin.register(Book)
class ViewAdmin(ImportExportModelAdmin):
    pass