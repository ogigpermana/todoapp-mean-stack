import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';

class ItemList extends Component {
  state = {
    items:[
      {id: uuid(), name: 'Belajar Mern Stack'},
      {id: uuid(), name: 'Belajar Mern Stack 2'},
      {id: uuid(), name: 'Belajar Mern Stack 3'},
      {id: uuid(), name: 'Belajar Mern Stack 4'}
    ]
  }

  render(){
    const { items } = this.state;
    return(
      <Container>
        <Button
        className="btn-items"
        color="primary"
        style={{ marginButtom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter Item');
          if(name){
            this.setState(state =>({
              items: [...state.items, {id: uuid(), name}]
            }));
          }
        }}>
        <i className="fa fa-plus"></i> Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="todo-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}
                  <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }));
                  }}
                  >
                  <i className="fa fa-remove"></i>
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ItemList;
