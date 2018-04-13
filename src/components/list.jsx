import '../styles/list.scss'

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

import ModalDialog from './modalDialog';
import ListItem from './listItem.jsx';

/* stores */
@inject(
  'RecipesStore',
)


@observer
class List extends Component {
  constructor(props) {
    super(props);

    this.itemId = null;
    this.RecipesStore = this.props.RecipesStore;
  }

  render() {
    this.itemId = this.props.RecipesStore.recipes.length;

    return (
      <div id="container">
        {
          this.RecipesStore
          .recipes
          .map( 
            (item, id) => 
              <ListItem 
                key={id}
                itemId={id}
                recipe={item}
                deleteRecipe={this.deleteRecipe}
              />
            )
        }
        <Button onClick={() => this.RecipesStore.openModal(this.itemId)} bsStyle="primary">Add Recipe</Button>
        <ModalDialog
          recipeId={this.itemId}
          btnText="Add Recipe"
          show={this.RecipesStore.modalStatus[this.itemId] }
        />
      </div>
    );
  }
}

export default List;
