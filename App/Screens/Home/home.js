import React, { useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

import { FlashList } from '@shopify/flash-list';

// =====================================================
// CATEGORIES
// =====================================================

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

// =====================================================
// DISCOUNT BANNERS
// Add more objects here whenever you want more banners
// =====================================================

const discountBanners = [
  {
    id: '1',
    image: require('../../Assets/Image/home_img/discount.png'),
  },
  {
    id: '2',
    image: require('../../Assets/Image/home_img/discount.png'),
  },
  {
    id: '3',
    image: require('../../Assets/Image/home_img/discount.png'),
  },
];

const dealProducts = [
  {
    id: '1',
    image: require('../../Assets/Image/home_img/product_1.png'),
  },
  {
    id: '2',
    image: require('../../Assets/Image/home_img/product_2.png'),
  },
  {
    id: '3',
    image: require('../../Assets/Image/home_img/product_1.png'),
  },
  {
    id: '4',
    image: require('../../Assets/Image/home_img/product_2.png'),
  },
];

// =====================================================
// HOME
// =====================================================

export default function Home({ navigation }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const productListRef = useRef(null);
  const [productIndex, setProductIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <FlashList
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <View style={styles.header}>
              {/* MENU */}

              <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                <Image
                  source={require('../../Assets/Image/home_img/drawer.png')}
                  style={styles.drawerIcon}
                />
              </TouchableOpacity>

              {/* LOGO */}

              <View style={styles.logoContainer}>
                <Image
                  source={require('../../Assets/Image/stylish.png')}
                  style={styles.logo}
                />
              </View>

              {/* PROFILE */}

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

            {/* ================================================= */}
            {/* SEARCH BAR */}
            {/* ================================================= */}

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

            {/* ================================================= */}
            {/* FEATURED HEADER */}
            {/* ================================================= */}

            <View style={styles.featuredHeader}>
              <Text style={styles.featuredTitle}>All Featured</Text>

              <View style={styles.actionContainer}>
                {/* SORT */}

                <TouchableOpacity
                  style={styles.actionButton}
                  activeOpacity={0.7}
                >
                  <Text style={styles.actionText}>Sort</Text>

                  <Image
                    source={require('../../Assets/Image/home_img/sort.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>

                {/* FILTER */}

                <TouchableOpacity
                  style={styles.actionButton}
                  activeOpacity={0.7}
                >
                  <Text style={styles.actionText}>Filter</Text>

                  <Image
                    source={require('../../Assets/Image/home_img/filter.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* ================================================= */}
            {/* HORIZONTAL CATEGORIES */}
            {/* ================================================= */}

            <View style={styles.categoryContainer}>
              <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                  paddingRight: 20,
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    activeOpacity={0.8}
                  >
                    <View style={styles.categoryImageWrapper}>
                      <Image source={item.image} style={styles.categoryImage} />
                    </View>

                    <Text style={styles.categoryName} numberOfLines={1}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* ================================================= */}
            {/* DISCOUNT BANNER */}
            {/* ================================================= */}

            <View style={styles.bannerSection}>
              <FlatList
                data={discountBanners}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                onMomentumScrollEnd={event => {
                  const slideWidth = event.nativeEvent.layoutMeasurement.width;

                  const currentIndex = Math.round(
                    event.nativeEvent.contentOffset.x / slideWidth,
                  );

                  setActiveBanner(currentIndex);
                }}
                renderItem={({ item }) => (
                  <View style={styles.bannerSlide}>
                    <Image
                      source={item.image}
                      style={styles.discountBanner}
                      resizeMode="cover"
                    />
                  </View>
                )}
              />

              {/* ================================================= */}
              {/* PAGINATION DOTS */}
              {/* ================================================= */}

              <View style={styles.pagination}>
                {discountBanners.map((item, index) => (
                  <View
                    key={item.id}
                    style={[
                      styles.dot,
                      index === activeBanner && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>
            {/* ================================================= */}
            {/* DEAL OF THE DAY */}
            {/* ================================================= */}

            <View style={styles.dealSection}>
              <View style={styles.dealContent}>
                {/* LEFT SIDE */}

                <View style={styles.dealLeft}>
                  <Text style={styles.dealTitle}>Deal of the Day</Text>

                  <View style={styles.timerRow}>
                    <Text style={styles.timerIcon}>⏱</Text>

                    <Text style={styles.timerText}>22h 55m 20s remaining</Text>
                  </View>
                </View>

                {/* VIEW ALL BUTTON */}

                <TouchableOpacity
                  style={styles.viewAllButton}
                  activeOpacity={0.8}
                >
                  <Text style={styles.viewAllText}>View all</Text>

                  <Text style={styles.arrowText}>→</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ================= DEAL PRODUCTS ================= */}

            <View style={styles.productSection}>
              <View style={styles.productCarouselWrapper}>
                <FlatList
                  ref={productListRef}
                  data={dealProducts}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  contentContainerStyle={styles.productListContent}
                  getItemLayout={(data, index) => ({
                    length: 228,
                    offset: 228 * index,
                    index,
                  })}
                  renderItem={({ item }) => (
                    <View style={styles.productCard}>
                      <Image
                        source={item.image}
                        style={styles.productImage}
                        resizeMode="contain"
                      />
                    </View>
                  )}
                />

                {/* NEXT ARROW */}

                <TouchableOpacity
                  style={styles.productNextButton}
                  activeOpacity={0.8}
                  onPress={() => {
                    const nextIndex =
                      productIndex + 1 >= dealProducts.length
                        ? 0
                        : productIndex + 1;

                    setProductIndex(nextIndex);

                    productListRef.current?.scrollToIndex({
                      index: nextIndex,
                      animated: true,
                    });
                  }}
                >
                  <Image
                    source={require('../../Assets/Image/home_img/side_arrow.png')}
                    style={styles.productArrow}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
    </View>
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

  listContent: {
    paddingBottom: 40,
  },

  // ===================================================
  // HEADER
  // ===================================================

  header: {
    height: 75,

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  iconButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#F5F5F5',

    justifyContent: 'center',

    alignItems: 'center',
  },

  drawerIcon: {
    width: 22,
    height: 22,

    resizeMode: 'contain',
  },

  logoContainer: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },

  logo: {
    width: 110,
    height: 45,

    resizeMode: 'contain',
  },

  profileButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    overflow: 'hidden',

    justifyContent: 'center',

    alignItems: 'center',
  },

  profile: {
    width: 42,
    height: 42,

    resizeMode: 'cover',
  },

  // ===================================================
  // SEARCH
  // ===================================================

  searchContainer: {
    height: 50,

    marginHorizontal: 20,

    marginTop: 8,

    borderRadius: 10,

    backgroundColor: '#F7F7F7',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,
  },

  searchIcon: {
    width: 20,
    height: 20,

    resizeMode: 'contain',
  },

  searchInput: {
    flex: 1,

    height: 50,

    marginLeft: 10,

    fontSize: 13,

    color: '#222222',

    paddingVertical: 0,
  },

  micIcon: {
    width: 19,
    height: 19,

    resizeMode: 'contain',
  },

  // ===================================================
  // FEATURED
  // ===================================================

  featuredHeader: {
    marginTop: 20,

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  featuredTitle: {
    fontSize: 20,

    fontWeight: '700',

    color: '#111111',
  },

  actionContainer: {
    flexDirection: 'row',

    gap: 8,
  },

  actionButton: {
    height: 34,

    paddingHorizontal: 11,

    borderRadius: 8,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#000000',

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

    marginRight: 5,
  },

  actionIcon: {
    width: 16,
    height: 16,

    resizeMode: 'contain',
  },

  // ===================================================
  // CATEGORIES
  // ===================================================

  categoryContainer: {
    marginTop: 14,

    paddingLeft: 20,
  },

  categoryItem: {
    width: 65,

    marginRight: 15,

    alignItems: 'center',
  },

  categoryImageWrapper: {
    width: 60,

    height: 60,

    borderRadius: 30,

    overflow: 'hidden',

    backgroundColor: '#F2F2F2',
  },

  categoryImage: {
    width: '100%',

    height: '100%',

    resizeMode: 'cover',
  },

  categoryName: {
    marginTop: 6,

    fontSize: 10,

    color: '#555555',

    textAlign: 'center',
  },

  // ===================================================
  // DISCOUNT BANNER
  // ===================================================

  bannerSection: {
    marginTop: 22,

    width: '100%',
  },

  bannerSlide: {
    width: 360,

    paddingHorizontal: 20,
  },

  discountBanner: {
    width: '100%',

    height: 150,

    borderRadius: 12,
  },

  // ===================================================
  // PAGINATION
  // ===================================================

  pagination: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 10,
  },

  dot: {
    width: 7,

    height: 7,

    borderRadius: 4,

    backgroundColor: '#D8D8D8',

    marginHorizontal: 4,
  },

  activeDot: {
    width: 8,

    height: 8,

    backgroundColor: '#FF3B5C',
  },

  // ===================================================
  // DEAL OF THE DAY
  // ===================================================

  dealSection: {
    marginTop: 18,
    marginHorizontal: 20,

    height: 82,

    borderRadius: 8,

    backgroundColor: '#438DF4',

    overflow: 'hidden',
  },

  dealContent: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 12,
  },

  dealLeft: {
    flex: 1,
  },

  dealTitle: {
    fontSize: 20,

    fontWeight: '500',

    color: '#FFFFFF',

    marginBottom: 6,
  },

  timerRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  timerIcon: {
    fontSize: 16,

    color: '#FFFFFF',

    marginRight: 5,
  },

  timerText: {
    fontSize: 13,

    color: '#FFFFFF',
  },

  viewAllButton: {
    height: 36,

    paddingHorizontal: 12,

    borderWidth: 1,

    borderColor: '#FFFFFF',

    borderRadius: 5,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  viewAllText: {
    fontSize: 12,

    color: '#FFFFFF',

    marginRight: 7,
  },

  arrowText: {
    fontSize: 18,

    color: '#FFFFFF',

    lineHeight: 18,
  },

  // ================= DEAL PRODUCTS =================

  productSection: {
    marginTop: 14,
    paddingBottom: 10,
  },

  productCarouselWrapper: {
    position: 'relative',
  },

  productListContent: {
    paddingLeft: 20,
    paddingRight: 40,
  },

  productCard: {
    width: 214,
    height: 305,

    marginRight: 14,

    borderRadius: 8,

    backgroundColor: '#FFFFFF',

    overflow: 'hidden',

    elevation: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productNextButton: {
    position: 'absolute',

    right: 8,
    top: '42%',

    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#E0E0E0',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  productArrow: {
    width: 22,
    height: 22,
  },
});
