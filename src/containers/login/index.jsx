import { Container } from './styles';
import Logo from '../../assets/logo.png';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo dev"/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo a pagina do <span>desenvolvedor carlos!</span> 
                    Acesse com seu<span>Login e senha.</span> 
                </Title>
                <form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email"/>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password"/>
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <button>Entrar</button>
                </form>
                <Link>Não possui conta? Clique aqui.</Link>
            </RightContainer>
        </Container>
    );
}