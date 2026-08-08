import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  //   FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import BottomTab from './bottom_tab';

// =====================================================
// PRODUCTS
// =====================================================

const products = [
  {
    id: '1',
    image: require('../../Assets/Image/wishlist_img/product_3.png'),
    name: 'Black Winter Jacket',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    oldPrice: '₹999',
    discount: '50%Off',
    rating: '4',
    reviews: '6,890',
  },
  {
    id: '2',
    image: require('../../Assets/Image/wishlist_img/product_4.png'),
    name: 'Mens Starry',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: '₹399',
    oldPrice: '₹799',
    discount: '50%Off',
    rating: '4',
    reviews: '1,52,344',
  },
  {
    id: '3',
    image: require('../../Assets/Image/wishlist_img/product_5.png'),
    name: 'Black Dress',
    description: 'Solid Black Dress for Women, Sexy Chain Shorts Ladi...',
    price: '₹2,000',
    oldPrice: '₹3,999',
    discount: '40%Off',
    rating: '4',
    reviews: '5,23,456',
  },
  {
    id: '4',
    image: require('../../Assets/Image/wishlist_img/product_6.png'),
    name: 'Pink Embroidered Dress',
    description: 'EARTHEN Rose Pink Embroidered Tiered Max...',
    price: '₹1,900',
    oldPrice: '₹3,799',
    discount: '50%Off',
    rating: '4',
    reviews: '45,678',
  },
  {
    id: '5',
    image: require('../../Assets/Image/wishlist_img/product_7.png'),
    name: 'Flare Dress',
    description: 'Athena Black & Rust Orange Floral Print Tiered Midi...',
    price: '₹1,990',
    oldPrice: '₹3,999',
    discount: '50%Off',
    rating: '4',
    reviews: '35,566',
  },
  {
    id: '6',
    image: require('../../Assets/Image/wishlist_img/product_8.png'),
    name: 'Denim Dress',
    description: 'Blue cotton denim dress Look 2 Printed cotton dr...',
    price: '₹1,800',
    oldPrice: '₹3,500',
    discount: '40%Off',
    rating: '4',
    reviews: '25,678',
  },
  {
    id: '7',
    image: require('../../Assets/Image/wishlist_img/product_9.png'),
    name: 'Casual Dress',
    description: 'Beautiful casual wear for women...',
    price: '₹1,500',
    oldPrice: '₹2,999',
    discount: '50%Off',
    rating: '4',
    reviews: '23,456',
  },
  {
    id: '8',
    image: require('../../Assets/Image/wishlist_img/product_10.png'),
    name: 'Summer Outfit',
    description: 'Comfortable stylish summer outfit...',
    price: '₹1,299',
    oldPrice: '₹2,599',
    discount: '50%Off',
    rating: '4',
    reviews: '12,345',
  },
];

// =====================================================
// PRODUCT CARD
// =====================================================

const ProductCard = ({ item, isLeft }) => {
  return (
    <View
      style={[styles.productCard, isLeft ? styles.leftCard : styles.rightCard]}
    >
      {/* ================= PRODUCT IMAGE ================= */}

      <View
        style={[
          styles.productImageContainer,
          isLeft ? styles.leftImageContainer : styles.rightImageContainer,
        ]}
      >
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* ================= PRODUCT DETAILS ================= */}

      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>

        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>

        {/* PRICE */}

        <Text style={styles.price}>{item.price}</Text>

        {/* OLD PRICE + DISCOUNT */}

        <View style={styles.discountRow}>
          <Text style={styles.oldPrice}>{item.oldPrice}</Text>

          <Text style={styles.discount}>{item.discount}</Text>
        </View>

        {/* RATING */}

        <View style={styles.ratingRow}>
          <Text style={styles.stars}>★★★★</Text>

          <Text style={styles.emptyStar}>☆</Text>

          <Text style={styles.reviewCount}>{item.reviews}</Text>
        </View>
      </View>
    </View>
  );
};

// =====================================================
// WISHLIST SCREEN
// =====================================================

export default function Wishlist({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.header}>
        {/* MENU */}

        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <Image
            source={require('../../Assets/Image/home_img/drawer.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        {/* LOGO */}

        <View style={styles.logoContainer}>
          <Image
            source={require('../../Assets/Image/stylish.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* PROFILE */}

        <TouchableOpacity style={styles.profileButton} activeOpacity={0.7}>
          <Image
            source={require('../../Assets/Image/home_img/profile.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* =================================================
          SEARCH BAR
      ================================================= */}

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

      {/* =================================================
          TITLE + SORT + FILTER
      ================================================= */}

      <View style={styles.titleRow}>
        <Text style={styles.title}>52,082+ Items</Text>

        <View style={styles.actions}>
          {/* SORT */}

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.actionText}>Sort</Text>

            <Image
              source={require('../../Assets/Image/home_img/sort.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>

          {/* FILTER */}

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.actionText}>Filter</Text>

            <Image
              source={require('../../Assets/Image/home_img/filter.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* =================================================
          PRODUCT GRID
      ================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productScroll}
      >
        <View style={styles.productColumns}>
          {/* ================= LEFT COLUMN ================= */}
          <View style={styles.leftColumn}>
            <ProductCard item={products[0]} />

            <ProductCard item={products[2]} />

            <ProductCard item={products[4]} />

            <ProductCard item={products[6]} />
          </View>

          {/* ================= RIGHT COLUMN ================= */}
          <View style={styles.rightColumn}>
            <ProductCard item={products[1]} />

            <ProductCard item={products[3]} />

            <ProductCard item={products[5]} />

            <ProductCard item={products[7]} />
          </View>
        </View>
      </ScrollView>

      {/* =================================================
          BOTTOM TAB
      ================================================= */}

      <View style={styles.bottomTabContainer}>
        <BottomTab navigation={navigation} activeTab="Wishlist" />
      </View>
    </SafeAreaView>
  );
}

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ===================================================
  // HEADER
  // ===================================================

  header: {
    height: 72,

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  menuButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#F5F5F5',

    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIcon: {
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
  },

  profileButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    overflow: 'hidden',
  },

  profileImage: {
    width: 40,
    height: 40,

    resizeMode: 'cover',
  },

  // ===================================================
  // SEARCH
  // ===================================================

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

    color: '#222222',

    paddingVertical: 0,
  },

  micIcon: {
    width: 18,
    height: 18,

    resizeMode: 'contain',
  },

  // ===================================================
  // TITLE
  // ===================================================

  titleRow: {
    marginTop: 18,

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,

    fontWeight: '700',

    color: '#111111',
  },

  // ===================================================
  // SORT + FILTER
  // ===================================================

  actions: {
    flexDirection: 'row',

    gap: 8,
  },

  actionButton: {
    height: 32,

    paddingHorizontal: 11,

    borderRadius: 8,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    elevation: 3,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 4,
  },

  actionText: {
    fontSize: 12,

    color: '#333333',

    marginRight: 5,
  },

  actionIcon: {
    width: 15,
    height: 15,

    resizeMode: 'contain',
  },

  /* =====================================================
   PRODUCT LIST
===================================================== */

  productList: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 130,
  },

  productScroll: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 140,
  },

  productColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  leftColumn: {
    width: '48%',
  },

  rightColumn: {
    width: '48%',
  },

  /* =====================================================
   PRODUCT CARD
===================================================== */

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',

    marginBottom: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  /* LEFT = SHORTER */

  leftCard: {
    minHeight: 270,
  },

  /* RIGHT = TALLER */

  rightCard: {
    minHeight: 350,
  },

  /* =====================================================
   IMAGE CONTAINER
===================================================== */

  productImageContainer: {
    width: '100%',

    backgroundColor: '#F5F5F5',

    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
  },

  /* LEFT IMAGE */

  leftImageContainer: {
    height: 145,
  },

  /* RIGHT IMAGE */

  rightImageContainer: {
    height: 190,
  },

  /* =====================================================
   PRODUCT IMAGE
===================================================== */

  productImage: {
    width: '100%',
    height: '100%',
  },

  /* =====================================================
   PRODUCT DETAILS
===================================================== */

  productDetails: {
    paddingHorizontal: 10,
    paddingTop: 9,
    paddingBottom: 10,
  },

  productName: {
    fontSize: 16,

    fontWeight: '500',

    color: '#111111',

    marginBottom: 5,
  },

  productDescription: {
    fontSize: 11,

    lineHeight: 16,

    color: '#555555',

    marginBottom: 5,
  },

  /* =====================================================
   PRICE
===================================================== */

  price: {
    fontSize: 15,

    fontWeight: '600',

    color: '#111111',

    marginTop: 1,
  },

  /* =====================================================
   DISCOUNT
===================================================== */

  discountRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 3,
  },

  oldPrice: {
    fontSize: 11,

    color: '#AAAAAA',

    textDecorationLine: 'line-through',

    marginRight: 8,
  },

  discount: {
    fontSize: 11,

    color: '#FF6B6B',
  },

  /* =====================================================
   RATING
===================================================== */

  ratingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,
  },

  stars: {
    fontSize: 15,

    color: '#FFB800',

    letterSpacing: 1,
  },

  emptyStar: {
    fontSize: 15,

    color: '#AAAAAA',

    marginLeft: 1,
  },

  reviewCount: {
    fontSize: 11,

    color: '#AAAAAA',

    marginLeft: 7,
  },
});
