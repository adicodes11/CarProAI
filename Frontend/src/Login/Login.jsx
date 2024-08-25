import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f5f7;
  font-family: 'Montserrat', sans-serif;
`;

const Wrapper = styled.div`
  position: relative;
  width: 768px;
  height: 480px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  display: flex;
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease-in-out;
  left: ${props => (props.active ? '0' : '-100%')};
  z-index: ${props => (props.active ? '5' : '1')};
  opacity: ${props => (props.active ? '1' : '0')};
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease-in-out;
  left: ${props => (props.active ? '50%' : '100%')};
  z-index: ${props => (props.active ? '5' : '1')};
  opacity: ${props => (props.active ? '1' : '0')};
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  transition: transform 0.6s ease-in-out;
  transform: ${props => (props.active ? 'translateX(-100%)' : 'translateX(0)')};
`;

const Overlay = styled.div`
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: ${props => (props.active ? 'translateX(50%)' : 'translateX(0)')};
  transition: transform 0.6s ease-in-out;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: ${props => (props.left ? 'translateX(-20%)' : 'translateX(20%)')};
  transition: transform 0.6s ease-in-out;
`;

const Form = styled.form`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid ${props => (props.ghost ? '#FFFFFF' : '#FF4B2B')};
  background-color: ${props => (props.ghost ? 'transparent' : '#FF4B2B')};
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;

const SocialContainer = styled.div`
  margin: 20px 0;
`;

const SocialLink = styled.a`
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 0.5px;
  line-height: 20px;
  margin: 20px 0 30px;
`;

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <Container>
      <Wrapper>
        <SignUpContainer active={isRightPanelActive}>
          <Form>
            <Title>Create Account</Title>
            <SocialContainer>
              <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-google-plus-g"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
            </SocialContainer>
            <span>or use your email for registration</span>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer active={!isRightPanelActive}>
          <Form>
            <Title>Sign in</Title>
            <SocialContainer>
              <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-google-plus-g"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
            </SocialContainer>
            <span>or use your account</span>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <Button>Sign In</Button>
          </Form>
        </SignInContainer>

        <OverlayContainer active={isRightPanelActive}>
          <Overlay active={isRightPanelActive}>
            <OverlayPanel left>
              <Title>Welcome Back!</Title>
              <Paragraph>To keep connected with us please login with your personal info</Paragraph>
              <Button ghost onClick={handleSignInClick}>Sign In</Button>
            </OverlayPanel>
            <OverlayPanel right>
              <Title>Hello, Friend!</Title>
              <Paragraph>Enter your personal details and start your journey with us</Paragraph>
              <Button ghost onClick={handleSignUpClick}>Sign Up</Button>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
