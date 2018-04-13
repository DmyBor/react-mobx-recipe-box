import { Button, ButtonToolbar} from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import ModalDialog from './modalDialog';

import '../styles/listItem.scss';

@inject (
  'RecipesStore'
)

@observer
class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.onLinkHandler = this.onLinkHandler.bind(this);
    this.RecipesStore = this.props.RecipesStore;
  }

  onLinkHandler() {
    this.setState(prevState => ({
      open: !prevState.open
    }));

  }

  render() {
    return (
      <div className='panel-heading'>
        <h4 className='panel-title'><a onClick={this.onLinkHandler}>{this.props.recipe.name}</a></h4>
        <div className={this.state.open ? 'panel-collapse div-collapse' : 'panel-collapse'}>
          <h4>Ingredients</h4>
          <ul>
            {
              this.props.recipe.ingrids.split(',').map( (item, id) => <li key={id}> {item} </li>)
            }
          </ul>
          <ButtonToolbar>
            <Button onClick={ () => this.RecipesStore.deleteRecipes(this.props.itemId) } bsStyle="danger">Delete</Button>
            <Button onClick={ () => this.RecipesStore.openModal(this.props.itemId) } >Edit</Button>
          </ButtonToolbar>
          <ModalDialog
            recipeId={this.props.itemId}
            btnText="Edit Recipe"      
            show={this.RecipesStore.modalStatus[this.props.itemId]}
          />
        </div>
      </div>
    );
  }
}

export default ListItem;
