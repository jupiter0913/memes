import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Right, Title, Text, Content, Form, Item, Input, Label, Button } from 'native-base';

const styles = StyleSheet.create({
  margincss: {
    margin: 20
  }
});
export default class Signup extends React.Component {
  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Singup</Title>
          </Body>
          <Right>
            <Button onPress={this.gotoLogin} transparent>
              <Text>Login</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
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
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}