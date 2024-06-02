import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
    const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    .required();

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique aqui.</a> 
                </p>
            </RightContainer>
        </Container>
    );
}