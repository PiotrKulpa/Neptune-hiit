import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { setIntervals } from '../redux/actions'
import ApplyButton from '../components/ApplyButton';

//TODO: export variables from inputs to Timer component
class SettingsScreen extends Component {
  onApply() {
    alert('Apply btn')
  }

  render() {
    return (
      <Container>
        

        <ScrollView>
          <Text>Labore ipsum labore qui sit incididunt labore magna magna. Fugiat officia eu et velit. Nostrud laboris consectetur culpa pariatur aliqua occaecat. In nulla aute dolor officia adipisicing occaecat est id magna aliqua Lorem officia. Culpa sint pariatur amet irure ipsum minim dolor enim do voluptate dolore enim qui.

Mollit Lorem exercitation tempor labore anim in fugiat fugiat non cupidatat. Ea quis sunt aute proident dolore duis mollit labore do nostrud sunt dolore labore. Excepteur ea do aliquip enim Lorem est commodo Lorem Lorem labore cupidatat sint minim anim. Nostrud sit dolore amet laboris aliqua consequat. Esse id nisi culpa velit nulla quis id fugiat velit. Nulla ipsum dolor id in velit sit.

Ut reprehenderit aliqua eu labore nostrud ea Lorem nostrud mollit voluptate. Ut commodo dolor dolor in ea non. Esse reprehenderit deserunt qui occaecat eiusmod non. Deserunt do non elit id ullamco do magna. Occaecat labore culpa deserunt reprehenderit nostrud ipsum id dolore occaecat.

Mollit reprehenderit in excepteur duis magna sunt. Sint sit consequat incididunt consequat aute culpa fugiat culpa. Do in fugiat qui incididunt culpa cillum esse sint pariatur duis aliquip pariatur commodo Lorem. Nulla voluptate irure occaecat et ut sunt.

Culpa laboris veniam dolore do ut cupidatat cupidatat voluptate ut minim. Eiusmod non aliqua non aute et in. In sit ipsum aute eu ullamco ad dolore. Aliquip voluptate duis laboris officia anim amet est excepteur nisi ipsum cillum laborum.

Ipsum quis sunt occaecat tempor elit nisi deserunt voluptate non in sunt sunt officia esse. Deserunt nulla aliquip anim duis amet et ullamco sunt minim. Veniam minim dolor laboris consequat ullamco non ad. Do mollit duis voluptate voluptate labore minim incididunt in ullamco ipsum enim ullamco ea ea.

Reprehenderit id sunt Lorem quis ex est aliqua. Sunt esse in minim do anim ex veniam. Nisi fugiat deserunt ut esse fugiat pariatur.

Ipsum commodo ullamco incididunt do nulla dolor nisi enim officia labore. Reprehenderit duis aliquip amet ut amet eiusmod sit labore voluptate. Nisi labore deserunt anim exercitation excepteur irure esse fugiat amet consequat est et amet. Labore reprehenderit sit cillum incididunt amet ex do qui est cupidatat. Nisi cupidatat et tempor aliquip fugiat officia magna cupidatat irure consectetur nulla ut.

Tempor laborum nostrud elit irure minim magna est non occaecat in culpa non voluptate labore. Officia Lorem tempor elit minim ex Lorem. Mollit tempor in fugiat consequat ullamco qui reprehenderit eu nostrud minim pariatur sunt cillum nisi. Elit elit velit proident incididunt est elit labore esse commodo duis do. Cillum pariatur officia ipsum excepteur enim ipsum reprehenderit dolor enim ut exercitation velit id.

Magna consequat nostrud cupidatat minim. Reprehenderit cillum voluptate est aliqua Lorem ullamco occaecat. Sunt consectetur nostrud dolore eiusmod cupidatat. Occaecat elit culpa excepteur dolor exercitation mollit excepteur tempor dolor. Et nulla commodo sint irure dolore pariatur elit tempor esse nostrud. Nisi nisi aliqua reprehenderit ipsum velit velit consequat reprehenderit eu.</Text>

        </ScrollView>
       
          <ApplyButton
          {...this.props}
            onPress={this.onApply}  
          >
            Apply
          </ApplyButton>
        
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    intervals: state.intervals
  }
}

const mapDispatchToProps = dispatch => ({
  setIntervals: settings => dispatch(setIntervals(settings))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
