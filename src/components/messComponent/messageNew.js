import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, View } from 'react-native'
import video from '../../public/video/test.mp4';
import MessageNewItem from './messageNewItem';
const dataNews = [
    {
        id: 1,
        avatar: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iyDUAcK4HcUAX9WZNwn&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_3hSyUd9jYrtiHy-tRYR4uSjF2T7i8iDNbRCzSUY3THA&oe=61FFEA96',
        status: true,
        name: 'Mạnh Dũng',
        newMessage: {
            uri: 'https://img.muji.net/img/item/4550344275726_1260.jpg',
            type: 'image',
            time: 1641903440901
        }
    },
    {
        id: 2,
        avatar: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/269691364_3166942690251215_6347259075499655799_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1spkCM0qMTkAX_5C9i0&_nc_ht=scontent.fhan5-9.fna&oh=00_AT_uZaZu3fhwqvy15pwrlYU9j2nJSBdznvZuFTpWChEAaw&oe=61E1FED3',
        status: true,
        name: 'Vân Anh',
        newMessage: {
            uri: 'https://cf.shopee.vn/file/4bb095934d0ef6a10dabca94458eea13_tn',
            type: 'image',
            time: 1641903440901
        }
    },
    {
        id: 3,
        avatar: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/240599591_549122373055352_5160480240209423306_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=oE8975coepgAX8a24mm&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8PhiusGlNG_sqf1hfoYG1kaBiovpPRgPd2E1vXQ-x5Qw&oe=61E1057C',
        status: true,
        name: 'Văn Linh',
        newMessage: {
            uri: 'https://cf.shopee.vn/file/f9c5a63183515592da50b3965b377fbc',
            type: 'image',
            time: 1641903440901
        }
    },
    {
        id: 4,
        avatar: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/269691364_3166942690251215_6347259075499655799_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1spkCM0qMTkAX_5C9i0&_nc_ht=scontent.fhan5-9.fna&oh=00_AT_uZaZu3fhwqvy15pwrlYU9j2nJSBdznvZuFTpWChEAaw&oe=61E1FED3',
        status: true,
        name: 'Đức Hải',
        newMessage: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wall_clock.jpg/220px-Wall_clock.jpg',
            type: 'image',
            time: 1564225
        }
    },
    {
        id: 5,
        avatar: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/269691364_3166942690251215_6347259075499655799_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1spkCM0qMTkAX_5C9i0&_nc_ht=scontent.fhan5-9.fna&oh=00_AT_uZaZu3fhwqvy15pwrlYU9j2nJSBdznvZuFTpWChEAaw&oe=61E1FED3',
        status: true,
        name: 'Đức Hải',
        newMessage: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wall_clock.jpg/220px-Wall_clock.jpg',
            type: 'image',
            time: 1641903441901
        }
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderTopWidth: 6,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 6,
    },
    ScrollView: {

    }
})
function MessageNew(props) {
  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
            {dataNews.map((item) => (<View key={item.id}>
                <MessageNewItem messagenew={item} />
            </View>))}
        </ScrollView>
    </View>
  ) 
}

MessageNew.propTypes = {

}

export default MessageNew

