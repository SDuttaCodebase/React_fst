import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import { FlashList } from '@shopify/flash-list';

const categories = [
    {
        id: '1',
        name: 'Beauty',
        image: require('../../Assets/Image/home_img/beauty.png'),
    },
    {
        id: '2',
        name: 'Fashion',
        image: require('../../Assets/Image/home_img/fashion.png'),
    },
    {
        id: '3',
        name: 'Kids',
        image: require('../../Assets/Image/home_img/kids.png'),
    },
    {
        id: '4',
        name: 'Mens',
        image: require('../../Assets/Image/home_img/men.png'),
    },
    {
        id: '5',
        name: 'Womens',
        image: require('../../Assets/Image/home_img/women.png'),
    },
    {
        id: '6',
        name: 'Gift',
        image: require('../../Assets/Image/home_img/gift.png'),
    },
];

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>

            <StatusBar
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
            />

            <FlashList
                data={[]}
                renderItem={null}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}

                ListHeaderComponent={

                    <View>

                        {/* ================= HEADER ================= */}

                        <View style={styles.header}>

                            {/* Menu */}

                            <TouchableOpacity
                                style={styles.iconButton}
                                activeOpacity={0.7}
                            >
                                <Image
                                    source={require('../../Assets/Image/home_img/drawer.png')}
                                    style={styles.drawerIcon}
                                />
                            </TouchableOpacity>


                            {/* Stylish Logo */}

                            <View style={styles.logoContainer}>

                                <Image
                                    source={require('../../Assets/Image/stylish.png')}
                                    style={styles.logo}
                                />

                            </View>


                            {/* Profile */}

                            <TouchableOpacity
                                style={styles.profileButton}
                                activeOpacity={0.7}
                            >

                                <Image
                                    source={require('../../Assets/Image/home_img/profile.png')}
                                    style={styles.profile}
                                />

                            </TouchableOpacity>

                        </View>


                        {/* ================= SEARCH BAR ================= */}

                        <View style={styles.searchContainer}>

                            <Image
                                source={require('../../Assets/Image/home_img/search.png')}
                                style={styles.searchIcon}
                            />

                            <TextInput
                                placeholder="Search any Product.."
                                placeholderTextColor="#A5A5A5"
                                style={styles.searchInput}
                            />

                            <Image
                                source={require('../../Assets/Image/home_img/mic.png')}
                                style={styles.micIcon}
                            />

                        </View>


                        {/* ================= FEATURED HEADER ================= */}

                        <View style={styles.featuredHeader}>

                            <Text style={styles.featuredTitle}>
                                All Featured
                            </Text>

                            <View style={styles.actionContainer}>

                                {/* Sort */}

                                <TouchableOpacity
                                    style={styles.actionButton}
                                    activeOpacity={0.7}
                                >

                                    <Text style={styles.actionText}>
                                        Sort
                                    </Text>

                                    <Image
                                        source={require('../../Assets/Image/home_img/sort.png')}
                                        style={styles.actionIcon}
                                    />

                                </TouchableOpacity>


                                {/* Filter */}

                                <TouchableOpacity
                                    style={styles.actionButton}
                                    activeOpacity={0.7}
                                >

                                    <Text style={styles.actionText}>
                                        Filter
                                    </Text>

                                    <Image
                                        source={require('../../Assets/Image/home_img/filter.png')}
                                        style={styles.actionIcon}
                                    />

                                </TouchableOpacity>

                            </View>

                        </View>


                        {/* ================= CATEGORIES ================= */}

                        <View style={styles.categoryContainer}>

                            <FlashList
                                data={categories}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                estimatedItemSize={72}

                                keyExtractor={(item) => item.id}

                                renderItem={({ item }) => (

                                    <TouchableOpacity
                                        style={styles.categoryItem}
                                        activeOpacity={0.8}
                                    >

                                        <View style={styles.categoryImageWrapper}>

                                            <Image
                                                source={item.image}
                                                style={styles.categoryImage}
                                            />

                                        </View>

                                        <Text
                                            style={styles.categoryName}
                                            numberOfLines={1}
                                        >
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>

                                )}

                            />

                        </View>

                    </View>
                }

            />

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    listContent: {
        paddingBottom: 30,
    },


    // ================= HEADER =================

    header: {
        height: 72,
        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,

        backgroundColor: '#F5F5F5',

        justifyContent: 'center',
        alignItems: 'center',
    },

    drawerIcon: {
        width: 21,
        height: 21,
        resizeMode: 'contain',
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 105,
        height: 42,
        resizeMode: 'contain',
    },

    profileButton: {
        width: 40,
        height: 40,
        borderRadius: 20,

        overflow: 'hidden',

        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },


    // ================= SEARCH =================

    searchContainer: {
        height: 48,

        marginHorizontal: 20,
        marginTop: 5,

        borderRadius: 8,

        backgroundColor: '#F7F7F7',

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 13,
    },

    searchIcon: {
        width: 19,
        height: 19,
        resizeMode: 'contain',
    },

    searchInput: {
        flex: 1,

        height: 48,

        marginLeft: 9,

        fontSize: 13,
        color: '#222',

        paddingVertical: 0,
    },

    micIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },


    // ================= FEATURED =================

    featuredHeader: {
        marginTop: 17,

        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    featuredTitle: {
        fontSize: 19,
        fontWeight: '700',
        color: '#111111',
    },

    actionContainer: {
        flexDirection: 'row',
        gap: 8,
    },

    actionButton: {
        height: 31,

        paddingHorizontal: 10,

        borderRadius: 7,

        backgroundColor: '#FFFFFF',

        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    actionText: {
        fontSize: 12,
        color: '#333333',
        marginRight: 4,
    },

    actionIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },


    // ================= CATEGORY =================

    categoryContainer: {
        marginTop: 12,
        paddingLeft: 20,
    },

    categoryItem: {
        width: 65,
        marginRight: 14,
        alignItems: 'center',
    },

    categoryImageWrapper: {
        width: 58,
        height: 58,

        borderRadius: 29,

        overflow: 'hidden',

        backgroundColor: '#F2F2F2',
    },

    categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    categoryName: {
        marginTop: 5,

        fontSize: 10,
        color: '#555555',

        textAlign: 'center',
    },

});