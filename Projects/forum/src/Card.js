import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true });
  }

  render() {
    return (
      <div>
        <button>Show Menu</button>
        {this.state.showMenu ? (
          <div className="menu">
            <button>Menu Item 1</button>
            <button>Menu Item 2</button>
            <button>Menu Item 3</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
