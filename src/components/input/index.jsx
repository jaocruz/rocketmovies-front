import { Container } from "./styles";

export function Input({ icon: Icon, value }){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input type="text"
        placeholder={value}
      />
    </Container>
  )
}