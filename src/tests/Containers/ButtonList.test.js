import React from 'react';
import renderer from 'react-test-renderer';
import ButtonList from '../../Components/Containers/ButtonList';
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter as Router } from 'react-router-dom'

describe('ButtonList', () => {
  const buttons = [{ "link": "eat", "logo": "Victoria" }, 
				 { "link": "buy", "logo": "Port Angeles" },
         { "link": "visit", "logo": "Bremerton" }
        ];
  it('renders buttons', () => {
          const tree = renderer.create(<Provider store={store}><Router><ButtonList data={buttons} /></Router></Provider>).toJSON();
          expect(tree).toMatchSnapshot();
      });
});
