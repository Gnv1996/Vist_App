import React from 'react';
import {View, ScrollView} from 'react-native';
import HotelCard from '../Component/HotelCard';
import room1 from '../Assest/room1.jpeg';
import room2 from '../Assest/room2.jpeg';
import room3 from '../Assest/room3.jpeg';
import room4 from '../Assest/room4.jpeg';
import room5 from '../Assest/room5.jpeg';
import chadView from '../Assest/hotelchad.jpeg';
import FooterScreen from './FooterScreen';
import {useNavigation} from '@react-navigation/native';

const hotels = [
  {
    id: '1',
    name: 'Hotel Chadwick View',
    rating: 3.4,
    description: '1 Bedroom , Washroom , Kitchen',
    image: chadView,
    price: 1000,
  },
  {
    id: '2',
    name: 'Radisson Hotel Shimla',
    rating: 4.5,
    description: 'Suite, 1 Bedroom',
    image: room1,
    price: 1400,
  },
  {
    id: '3',
    name: 'Welcomhotel by ITC Hotels, Shimla',
    rating: 8.5,
    description: 'Luxury Room , 1 Queen Bed , Multiple View Shimla',
    image: room2,
    price: 1550,
  },
  {
    id: '4',
    name: 'Snow Valley Resorts',
    rating: 8.8,
    description: 'Standard Double Room ,1 Double Bed, Accessible Shimla',
    image: room3,
    price: 2340,
  },
  {
    id: '5',
    name: 'The Retreat Mashobra',
    rating: 8.8,
    description: 'Sweat Heritage Bed',
    image: room4,
    price: 1440,
  },
  {
    id: '6',
    name: 'Hotel Southgate Shimla',
    rating: 8.8,
    description: 'Heritage Suite',
    image: room5,
    price: 7530,
  },
];

const HotelScreen = () => {
  const navigation = useNavigation();

  const handleBooking = hotel => {
    // console.log(`Book Now pressed for hotel ID: ${hotel.id}`);
    navigation.navigate('Booking', {hotel});
  };

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        {hotels.map(hotel => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            rating={hotel.rating}
            description={hotel.description}
            image={hotel.image}
            price={hotel.price}
            onPress={() => handleBooking(hotel)}
          />
        ))}
      </View>
      <FooterScreen />
    </ScrollView>
  );
};

export default HotelScreen;
