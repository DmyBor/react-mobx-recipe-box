import { Button, Modal, ControlLabel, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

@inject(
  'RecipesStore'
)

@observer
class ModalDialog extends Component {
  constructor(props) {
      super(props);
           
      this.RecipesStore = this.props.RecipesStore;
      this.itemId = this.props.recipeId
  
      this.state = {
        'name': !!this.RecipesStore.recipes[this.itemId] ? this.RecipesStore.recipes[this.itemId].name : '',
        'ingrids': !!this.RecipesStore.recipes[this.itemId] ? this.RecipesStore.recipes[this.itemId].ingrids : ''
      }

      this.handlerChange = this.handlerChange.bind(this);
    }

  handlerChange(item, e) {
    let state = this.state;
    state[item] = e.target.value;
    this.setState(state);
  }


  render () {
    return (
      <div className="modal-container">
        <Modal show={this.props.show} onHide={ () => this.RecipesStore.closeModal() } >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        
        <Modal.Body>
          <h4>{this.props.btnText || 'Default Header'}</h4>
          <form>
            <ControlLabel>Recipe</ControlLabel>
            <FormControl
                type="text"
                value={this.state.name}
                placeholder="Recipe Name"
                onChange={(e) => this.handlerChange('name', e)}
            />
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl
                type="textarea"
                value={this.state.ingrids}
                placeholder="Enter ingredients,Separated,By Commas"
                onChange={(e) => this.handlerChange('ingrids', e)}
            />    
          </form>    
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={() => this.RecipesStore.addRecipe(this.state.name, this.state.ingrids, this.itemId) }>{this.props.btnText}</Button>
          <Button onClick={() => this.RecipesStore.closeModal(this.itemId) }>Close</Button>
        </Modal.Footer>
      </Modal>          
      </div>
    )
  }
}

export default ModalDialog;