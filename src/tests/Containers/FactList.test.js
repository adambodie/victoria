import React from 'react';
import renderer from 'react-test-renderer';
import FactList from '../../Components/Containers/FactList';
import { Provider } from 'react-redux'
import store from '../../store'


describe('FactList', () => {
    const facts = ["Hall of Fame Football player John Elway was born in Port Angeles", 
      "Congregation Emanu-El is the oldest Jewish Synagogue in Canada",
      "The population of Port Angeles is about 19,500"];
    it('renders a fact', () => {
        const tree = renderer.create(<Provider store={store}><FactList data={facts} /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

