import { observable, action } from 'mobx';

class RecipesStore {
  @observable recipes;
  @observable modalStatus;

  constructor() {
    this.recipes = [{
        'name' : 'Spaghetti',
        'ingrids': 'Noodles,Tomato Sauce,(Optional) Meatballs'
    }, {
        'name' : 'Onion Pie',
        'ingrids': 'Onion,Pie Crust,Sounds Yummy right?'
    }, {
        'name': 'Pumpkin Pie',
        'ingrids': 'Pumpkin Puree,Sweetened Condensed Milk,Eggs,Pumpkin Pie Spice,Pie Cru'
    }];

    this.modalStatus = [false, false, false, false];
  }

  @action('open modal window')
  openModal(id) {
    this.modalStatus[id] = true;
  }

  @action('close modal window')
  closeModal(id) {
    this.modalStatus[id] = false;
  }

  @action('delete recipe')
  deleteRecipes(id) {
    this.recipes = this.recipes.filter( (item, index) => index !== id);
    this.modalStatus = this.modalStatus.filter( (item, index) => index !== id);
  }

  @action('add recipe')
  addRecipe(name, ingrids, item) {
    if (!name || !ingrids) {
        this.modalStatus[item] = false;
        return;
    }

    if (!this.recipes[item]) {
      this.recipes.push({
        'name': name,
        'ingrids': ingrids
      })
      this.modalStatus[item] = false;      
      this.modalStatus.push(false);
    } else {
      this.recipes[item] = {
        'name': name,
        'ingrids': ingrids
      };
      this.modalStatus[item] = false;            
    }
  }

}

export default new RecipesStore();