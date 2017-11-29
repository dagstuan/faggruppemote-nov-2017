import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../data/actions';
import * as selectors from '../../data/selectors';

class NameList extends PureComponent {
  render() {
    console.log('nameList render!');

    return (
      <ul>
        {this.props.names.map(name => <li key={name}>{name}</li>)}
      </ul>
    );
  }
}

const RootComponent = ({
  counter, people, increment,
}) => {
  console.log('RootComponent render!');
  const names = people.map(person => person.get('name'));

  return (
    <div>
      <h1>Counter er: { counter }</h1>
      <button onClick={increment}>+</button>

      <NameList names={names} />
    </div>
  );
};

const mapStateToProps = state => ({
  people: selectors.getPeople(state),
  counter: selectors.getCounter(state),
});

const mapDispatchToProps = {
  increment: actions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);































// const RootComponent = ({
//   counter, names, increment,
// }) => {
//   return (
//     <div>
//       <h1>Counter er: { counter }</h1>
//       <button onClick={increment}>+</button>
//
//       <NameList names={names} />
//     </div>
//   );
// };
//
// const mapStateToProps = state => ({
//   names: selectors.getNames(state),
//   counter: selectors.getCounter(state),
// });
