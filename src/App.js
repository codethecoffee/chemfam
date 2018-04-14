import React, { Component } from "react";
import { Container, Grid, Header, Icon, Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Container textAlign="center">
          <Header as="h2" icon>
            <Icon name="child" />
            Chem Fam
            <Header.Subheader>
              Help the elements find their family!
            </Header.Subheader>
          </Header>
        </Container>
      </div>
    );
  }
}

export default App;
