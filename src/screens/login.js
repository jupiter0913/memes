import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Right, Title, Text, Content, Form, Item, Input, Label, Button } from 'native-base';

const styles = StyleSheet.create({
  margincss: {
    margin: 20
  }
});
export default class Login extends React.Component {
  gotosingup = () => {
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right>
            <Button onPress={this.gotosingup} transparent>
              <Text>Singup</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button style={[styles.margincss]} block>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}