from django.core.management.base import BaseCommand
from django.utils import timezone
from service.models import User, AmenityType, Amenity, PropertyType, Property, Photo, Booking, Room, RoomBooking, Review

class Command(BaseCommand):
    help = 'Seeds the database with initial data'

    def handle(self, *args, **options):
        # Delete all data from all tables
        User.objects.all().delete()
        AmenityType.objects.all().delete()
        Amenity.objects.all().delete()
        PropertyType.objects.all().delete()
        Property.objects.all().delete()
        Photo.objects.all().delete()
        Booking.objects.all().delete()
        Room.objects.all().delete()
        RoomBooking.objects.all().delete()
        Review.objects.all().delete()

        # Create users
        user1 = User.objects.create_user(username='user1', password='u1password!', is_host=True, is_superuser=True, first_name='John', last_name='Doe', email='jd@email.com')
        user2 = User.objects.create_user(username='user2', password='u2password!', is_host=False, is_superuser=True, first_name='Jane', last_name='Doe', email='jed@email.com')
        user3 = User.objects.create_user(username='user3', password='u3password!', is_host=True, is_superuser=True, first_name='Alice', last_name='Smith', email='ad@email.com')

        # Create amenity types
        amenity_type1 = AmenityType.objects.create(name='Wifi')
        amenity_type2 = AmenityType.objects.create(name='Parking')
        amenity_type3 = AmenityType.objects.create(name='Pool')
        amenity_type4 = AmenityType.objects.create(name='Gym')

        # Create property types
        property_type1 = PropertyType.objects.create(name='House')
        property_type2 = PropertyType.objects.create(name='Apartment')
        property_type3 = PropertyType.objects.create(name='Villa')

        # Create rooms
        room1 = Room.objects.create(name='Master Bedroom', capacity=2)
        room2 = Room.objects.create(name='Single Room', capacity=1)
        room3 = Room.objects.create(name='Double Room', capacity=2)
        room4 = Room.objects.create(name='Kitchen', capacity=2)
        room5 = Room.objects.create(name='Living Room', capacity=4)

        # Create photos
        photo1 = Photo.objects.create(url='https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        photo2 = Photo.objects.create(url='https://plus.unsplash.com/premium_photo-1684175656172-19a7ee56f0c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        photo3 = Photo.objects.create(url='https://images.unsplash.com/photo-1580494767366-82f4e74f5655?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

        # Create properties
        property1 = Property.objects.create(
            host=user1, 
            title='Luxury Villa', 
            description='Luxury villa with pool and gym', 
            price=1200.00, 
            location='Dubai', 
            available_start=timezone.now(), 
            available_end=timezone.now(), 
            property_type=property_type3
        )
        property1.photos.add(photo3)
        property1.rooms.add(room1, room2, room3, room4, room5)
        property1.amenities.add(amenity_type1, amenity_type2, amenity_type3, amenity_type4)

        property2 = Property.objects.create(
            host=user2, 
            title='Luxury Apartment', 
            description='Luxury apartment with pool and gym', 
            price=450.00, 
            location='London', 
            available_start=timezone.now(), 
            available_end=timezone.now(), 
            property_type=property_type2
        )
        property2.photos.add(photo2)
        property2.rooms.add(room1, room2,)
        property2.amenities.add(amenity_type1, amenity_type3, amenity_type4)

        property3 = Property.objects.create(
            host=user3, 
            title='Luxury House', 
            description='Luxury house with pool and gym', 
            price=800.00, 
            location='Paris', 
            available_start=timezone.now(), 
            available_end=timezone.now(), 
            property_type=property_type1
        )
        property3.photos.add(photo1)
        property3.rooms.add(room1, room2, room3)
        property3.amenities.add(amenity_type1, amenity_type2, amenity_type3)

        # Create bookings
        booking1 = Booking.objects.create(
            guest=user1, 
            property=property1, 
            check_in_date=timezone.now() + timezone.timedelta(days=7), 
            check_out_date=timezone.now() + timezone.timedelta(days=14),
        )
        
        booking2 = Booking.objects.create(
            guest=user2, 
            property=property2, 
            check_in_date=timezone.now() + timezone.timedelta(days=15), 
            check_out_date=timezone.now() + timezone.timedelta(days=22),
        )

        # Create room bookings
        room_booking1 = RoomBooking.objects.create(
            room=room1, 
            booking=booking1,
            adults=3,
            children=1,
            pets=0,
        )

        room_booking2 = RoomBooking.objects.create(
            room=room2, 
            booking=booking1,
            adults=1,
            children=0,
            pets=1,
        )

        # Create reviews
        review1 = Review.objects.create(
            reviewer=user1,
            property=property1,
            review_text='Great place, would recommend!',
            rating=5,
        )

        review2 = Review.objects.create(
            reviewer=user2,
            property=property2,
            review_text='Good place, would stay again!',
            rating=4,
        )