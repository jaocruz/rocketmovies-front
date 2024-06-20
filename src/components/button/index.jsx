import { Container } from "./styles";

export function Button({ icon: Icon, value }){
  return(
    <Container>
      {Icon && <Icon size={22}/>}
      {value}
    </Container>
  )
}