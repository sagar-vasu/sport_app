import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Card} from '../../components';

const allCategories = [
  {
    name: 'Fundamental Camps',
    value: 'FundamentalCamps',
  },
  {
    name: 'Basketball Camps',
    value: 'BasketballCamps',
  },
  {
    name: 'Sports Leagues',
    value: 'SportsLeagues',
  },
  {
    name: 'After-school Sports Programming',
    value: 'AfterSchoolSports',
  },
  {
    name: 'Coaches Clinics',
    value: 'CoachesClinics',
  },
  {
    name: 'Volleyball Camps & Clinics',
    value: 'VolleyballCamps',
  },
  {
    name: 'Homeschool PE',
    value: 'HomeschoolPE',
  },
  {
    name: 'International Camps',
    value: 'InternationalCamps',
  },
  {
    name: 'Parent/Staff Engagement Programs',
    value: 'Parent/StaffPrograms',
  },
  {
    name: 'Athlete Workshops',
    value: 'AthleteWorkshops',
  },
  {
    name: 'Multi Sports Summer Camps',
    value: 'MultiSportsCamps',
  },
];

function CategoriesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.info}>Please Select Your Category</Text>

        <View style={styles.listContainer}>
          {allCategories &&
            allCategories.map((val, i) => {
              return (
                <Card
                  onPress={() =>
                    navigation.navigate('List', {category: val.value})
                  }
                  key={i}
                  title={val.name}
                />
              );
            })}
        </View>
        <View style={{height: 30}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  info: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#033E9C',
  },

  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default CategoriesScreen;
