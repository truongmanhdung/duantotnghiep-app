import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import CourseItem from './CourseItem'

const data = [
    {
        id: 1,
        header: 'Khóa học nói tiếng Anh',
        teacher: {
            avatar: 'https://i.ibb.co/Qfhzj0H/img2.png',
            name: 'Megan'
        },
        title: 'for Great Small Talk',
        content: {
            title: 'Nói chuyện phiếm',
            text: 'Bạn cảm thấy ngượng ngùng khi giao tiếp bằng tiếng Anh. Khi gặp một người bản xứ và bạn chỉ biết nói "How are you?". Với 10 bí quyết trò chuyện, nói tiếng Anh hữu ích này, bạn sẽ có thể giao tiếp với người bản xứ trong 30 phút!',
            image: 'https://i.ibb.co/Qfhzj0H/img2.png'
        },
        status: 'Sơ cấp',
        countCouse: 10,
        backgroundColor: '#a7418c'
    },
    {
        id: 2,
        header: 'Khóa học đọc tiếng Anh',
        teacher: {
            avatar: 'https://i.ibb.co/wS6q15P/img4.png',
            name: 'Jully'
        },
        title: 'All English Greetings and Farewells',
        content: {
            title: 'Chào hỏi hàng ngày',
            text: 'Bạn có biết còn những cách khác để chào hỏi ngoài "Hi" và "Hello" không?. Kiến thức về lý thuyết sẽ được chúng tôi chỉ dạy bạn rõ ràng và chi tiết nhất',
            image: 'https://i.ibb.co/wS6q15P/img4.png'
        },
        status: 'Nhập môn',
        countCouse: 8,
        backgroundColor: '#d96725'
    },
    {
        id: 3,
        header: 'Khóa học nghe ngữ pháp và từ vựng tiếng Anh',
        teacher: {
            avatar: 'https://i.ibb.co/zX9vKhf/img5.png',
            name: 'Lilla'
        },
        title: 'English Verbs for Listening',
        content: {
            title: 'Động từ cơ bản tiếng Anh',
            text: 'Bạn chỉ biết những nghĩa phổ biết của động từ "go" sao? Các động từ khó phát âm khiến bạn lo sợ? Hãy để chúng tôi giúp đỡ bạn vượt qua mặc cảm này?',
            image: 'https://i.ibb.co/zX9vKhf/img5.png'
        },
        status: 'Nhập môn',
        countCouse: 12,
        backgroundColor: '#e38de6'
    },
]

const styles = StyleSheet.create({
    container: {
        paddingBottom: 80
    }
})
function CourseListItem(props) {
    
    return (
        <View style={styles.container}>
            {data.map((course) => 
                <View key={course.id}><CourseItem course={course} /></View>
            )}

        </View>
    )
}

CourseListItem.propTypes = {

}

export default CourseListItem

