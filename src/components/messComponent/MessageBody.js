import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import MessageBodyItem from './MessageBodyItem'
const data = [
    {
        id: 1,
        avatar: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iyDUAcK4HcUAX9WZNwn&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_3hSyUd9jYrtiHy-tRYR4uSjF2T7i8iDNbRCzSUY3THA&oe=61FFEA96',
        name: 'Trương Mạnh Dũng',
        message: 'Alo tao là Dũng đây',
        checked: true,
        firstName: 'Dũng',
        timeLine: '20:36',
        color: '#669999',
    },
    {
        id: 2,
        avatar: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/269691364_3166942690251215_6347259075499655799_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1spkCM0qMTkAX_5C9i0&_nc_ht=scontent.fhan5-9.fna&oh=00_AT_uZaZu3fhwqvy15pwrlYU9j2nJSBdznvZuFTpWChEAaw&oe=61E1FED3',
        name: 'Nguyễn Vân Anh',
        message: 'Mình là Vân Anh nè',
        checked: false,
        firstName: 'Anh',
        timeLine: '10:48',
        color: '#669999',
    },
    {
        id: 3,
        avatar: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/240599591_549122373055352_5160480240209423306_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=oE8975coepgAX8a24mm&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8PhiusGlNG_sqf1hfoYG1kaBiovpPRgPd2E1vXQ-x5Qw&oe=61E1057C',
        name: 'Nguyễn Văn Linh',
        message: 'Mình là Linh học giỏi đây',
        checked: false,
        firstName: 'Linh',
        timeLine: '09:20',
        color: '#669999',
    },
    {
        id: 4,
        avatar: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/133293955_1583421318532352_6570152348717983141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NnBdJf_V_ewAX8TZLoR&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-aCu0T8coIsJlK1K2DclqLFVaAuJvdnlS7yYNfQ_2EKg&oe=6201525D',
        name: 'Nguyễn Đức Hải',
        message: 'Mình là Hải nè Mình là Hải nè Mình là Hải nè Mình là Hải nè',
        checked: false,
        firstName: 'Hải',
        timeLine: '07:20',
        color: '#669999',
    },
    {
        id: 6,
        avatar: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/133293955_1583421318532352_6570152348717983141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NnBdJf_V_ewAX8TZLoR&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-aCu0T8coIsJlK1K2DclqLFVaAuJvdnlS7yYNfQ_2EKg&oe=6201525D',
        name: 'Nguyễn Đức Hải',
        message: 'Mình là Hải nè Mình là Hải nè Mình là Hải nè Mình là Hải nè',
        checked: false,
        firstName: 'Hải',
        timeLine: '07:20',
        color: '#669999',
    },
    {
        id: 42,
        avatar: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/133293955_1583421318532352_6570152348717983141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NnBdJf_V_ewAX8TZLoR&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-aCu0T8coIsJlK1K2DclqLFVaAuJvdnlS7yYNfQ_2EKg&oe=6201525D',
        name: 'Nguyễn Đức Hải',
        message: 'Mình là Hải nè Mình là Hải nè Mình là Hải nè Mình là Hải nè',
        checked: false,
        firstName: 'Hải',
        timeLine: '07:20',
        color: '#669999',
    },
    {
        id: 44,
        avatar: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/133293955_1583421318532352_6570152348717983141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NnBdJf_V_ewAX8TZLoR&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-aCu0T8coIsJlK1K2DclqLFVaAuJvdnlS7yYNfQ_2EKg&oe=6201525D',
        name: 'Nguyễn Đức Hải',
        message: 'Mình là Hải nè Mình là Hải nè Mình là Hải nè Mình là Hải nè',
        checked: false,
        firstName: 'Hải',
        timeLine: '07:20',
        color: '#669999',
    },
    {
        id: 46,
        avatar: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/133293955_1583421318532352_6570152348717983141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NnBdJf_V_ewAX8TZLoR&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-aCu0T8coIsJlK1K2DclqLFVaAuJvdnlS7yYNfQ_2EKg&oe=6201525D',
        name: 'Nguyễn Đức Hải',
        message: 'Mình là Hải nè Mình là Hải nè Mình là Hải nè Mình là Hải nè',
        checked: false,
        firstName: 'Hải',
        timeLine: '07:20',
        color: '#669999',
    },
]
function MessageBody(props) {
  return (
    <View>
        {data.map((item) => (
            <View key={item.id} style={{marginTop: 10}}>
                <MessageBodyItem message={item} />
            </View>
        ))}
    </View>
  )
}

MessageBody.propTypes = {

}

export default MessageBody

