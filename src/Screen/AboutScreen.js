import React from 'react';
import {ScrollView} from 'react-native';
import shim_02 from '../Assest/shim_02.jpeg';
import hill_Area from '../Assest/hill_Area.jpeg';
import shiml_03 from '../Assest/shiml_03.jpeg';
import CardScreen from '../Component/CardScreen';
import shim_04 from '../Assest/shim_04.jpeg';
import Apple_tree from '../Assest/Apple_tree.jpeg';
import GreenValley from '../Assest/GreenValley.jpeg';
import chadwick_falls from '../Assest/fall.jpeg';
import FooterScreen from './FooterScreen';

const AboutScreen = () => {
  return (
    <ScrollView>
      <CardScreen
        title="Christ Church"
        description="During the British Rule in India, many British people as well as Anglo-Indians used to reside there. Those residents were the followers of Christianity and had requested the government to set up a church for them so that they could worship Lord Jesus. Christ Church is one of the important heritage monuments of Shimla. The yellow building of this notable church of Shimla is visible from far off...."
        imageSource={shim_02}
        price={300}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />

      <CardScreen
        title="Kufri
        "
        description="Kufri is a small hill station. It is famous for its beautiful and cool refreshing atmosphere that pervades it. In summers, travelers can enjoy the panoramic view of the surrounding verdant valleys and snow-capped peaks. There are a number of picnic spots, hiking and trekking trails in and around Kufri.Travelers can explore Kufri and its surrounding areas also on horseback. They can hike through thick forest around Kufri to the Mahasu Peak."
        imageSource={hill_Area}
        price={500}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />

      <CardScreen
        title="Shimla"
        description="Snow-capped Himalayan peaks and green pastures surround Shimla, the capital of Himachal Pradesh. Enjoy a heritage walk through Shimla’s Victorian-era architecture, labyrinthine bazaars and lengthy pedestrian shopping mall. Don’t cause too much trouble taking in the town from Scandal Point, a large, open square; keep in mind that Shimla was a retreat destination for Mahatma Gandhi, who frequented a Georgian mansion in Shimla’s suburbs from the mid-1930s to '40s."
        imageSource={shiml_03}
        price={600}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />
      <CardScreen
        title="Mall Road"
        description="Shimla Mall, a vibrant hub nestled in the heart of the city, offers a delightful blend of shopping, dining, and entertainment. Its picturesque surroundings and colonial architecture attract visitors worldwide, making it a cherished destination for both locals and tourists alike."
        imageSource={shim_04}
        price={200}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />
      <CardScreen
        title="Apple Tree garden in Kufri"
        description="Visiting the Apple Tree at Kufri offers a delightful escape into nature's bounty. Amidst the serene landscapes, these orchards showcase the beauty and abundance of Himachal Pradesh's apple cultivation, inviting visitors to savor the crisp air and indulge in the sweetness of freshly-picked fruits."
        imageSource={Apple_tree}
        price={100}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />

      <CardScreen
        title="Green Valley"
        description="Green Valley in Shimla is a verdant paradise, offering breathtaking vistas of lush forests, cascading hills, and meandering streams. Its serene ambiance and panoramic views make it a popular spot for nature lovers and photographers seeking tranquility amidst the Himalayan beauty."
        imageSource={GreenValley}
        price={200}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />
      <CardScreen
        title="Chadwick Falls"
        description="Chadwick Falls, nestled in the verdant forests of Shimla, captivates visitors with its picturesque cascades and tranquil surroundings. This natural gem offers a refreshing retreat from the bustling city, inviting travelers to immerse themselves in the soothing sounds of flowing water and verdant greenery."
        imageSource={chadwick_falls}
        price={400}
        onPress={() => {
          // Handle onPress event
          console.log('Book Now pressed');
        }}
      />
      <FooterScreen />
    </ScrollView>
  );
};

export default AboutScreen;
