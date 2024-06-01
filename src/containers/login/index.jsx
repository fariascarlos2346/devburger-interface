import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { 
    Container, 
    Form, 
    InputContainer, 
    LeftContainer, 
    RightContainer, 
    Title 
} from './styles';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo dev" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo a pagina do <span>desenvolvedor Carlos!</span>
                    <br/>Acesse com seu <span> Login e senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique aqui.</a> 
                </p>
            </RightContainer>
        </Container>
    );
}