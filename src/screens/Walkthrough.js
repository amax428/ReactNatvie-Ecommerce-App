import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import WalkthroughItem from '../components/WalkthroughItem';
import Button from '../components/Button';
import TouchableText from '../components/TouchableText';
import { Colors, Spacing } from '../styles/variables';

const data = [
  {
    url: require('../assets/image/walkthrough1.png'),
    title: 'Lorem ipsum is placeholder',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
  },
  {
    url: require('../assets/image/walkthrough2.png'),
    title: 'Lorem ipsum is placeholder',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
  },
  {
    url: require('../assets/image/walkthrough3.png'),
    title: 'Lorem ipsum is placeholder',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
  }
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Walkthrough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      activeSlide: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
  }

  componentDidMount() {
    this.setState({items: data});
  }

  handleNext() {
    const { activeSlide, items } = this.state;
    if (activeSlide < items.length - 1) {
      this._carousel.snapToNext();
    } else {
      this.handleSkip();
    }
  }

  handleSkip() {
    console.log('----------------skipped');
  }

  _renderItem ({item, index}) {
    return (
      <WalkthroughItem
        url={item.url}
        title={item.title}
        description={item.description}
      />
    );
  }

  render() {
    const { items, activeSlide } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.dealsCarousel}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={items}
            renderItem={this._renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
            scrollEnabled={false}
          />
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.carouselPageContainer}
            dotStyle={styles.carouselPageDot}
            inactiveDotStyle={styles.carouselInactivePageDot}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handleNext}>Next</Button>
          <View style={styles.hCenter}>
            <TouchableText onPress={this.handleSkip} type="bold">Skip</TouchableText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dealsCarousel: {
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselName: {
    position: 'absolute',
  },
  carouselImage: {
    flex: 1,
    width: viewportWidth,
  },
  carouselPageContainer: {
    width: '100%',
  },
  carouselPageDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: Colors.Accent.main,
  },
  carouselInactivePageDot: {
    backgroundColor: Colors.Grey.lighter,
  },
  buttonContainer: {
    marginHorizontal: Spacing.Big,
  },
  hCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default Walkthrough;
