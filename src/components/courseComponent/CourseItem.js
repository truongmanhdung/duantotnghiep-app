import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native';
import Avatar from '../avatarComponent/Avatar';
import Entypo from 'react-native-vector-icons/Entypo'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 180,
        height: 180,
        position: 'absolute',
        right: 10,
        zIndex: 1,
    },
    textHeder: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    textContent: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        width: '70%'
    },
    textcouse: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        marginLeft: 5
    },
    contentHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    contentText: {
        color: '#04012f'
    },
    viewContent: {
        padding: 15
    },
    status: {
        padding: 5,
        backgroundColor: '#e70d4c',
        width: 50,
        textAlign: 'center',
        borderRadius: 10,
        color: 'white'
    },
    headerLeft: {
        zIndex: 20
    }
})
function CourseItem(props) {
    const {course} = props;
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: course.backgroundColor, padding: 15}}>
                <Text style={styles.status}>FREE</Text>
                <View style={styles.flex}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.textHeder}>
                            {course.countCouse} Topics
                        </Text>
                        <Text style={styles.textContent}>{course.title}</Text>
                        <View style={styles.flex}>
                            <Avatar uri={course.teacher.avatar} width={20} height={20} />
                            <Text style={{color: 'white', marginLeft: 5}}>{course.teacher.name}</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.image} source={{uri: course.content.image}} />
            </View>
            <View style={[styles.flex, {marginTop: 10, marginLeft: 15}]}>
                <Entypo style={{color: '#d92559'}} name='bar-graph' />
                <Text style={styles.textcouse}>{course.status} <Entypo name='dot-single' /> Tổng {course.countCouse} bài học</Text>
            </View>
            <View style={styles.viewContent}>
                <Text style={styles.contentHeader}>{course.content.title}</Text>
                <Text style={styles.contentText}>{course.content.text}</Text>
            </View>
        </View>
    )
}

CourseItem.propTypes = {
    course: PropTypes.object
}

export default CourseItem

