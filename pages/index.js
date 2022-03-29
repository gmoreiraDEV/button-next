
import {FaWhatsapp} from 'react-icons/fa'
import Button from '../components/Button'
import ButtonWithShadow from '../components/ButtonWithShadow'
import Container from '../components/Container'
import {Vercel, PersonalChefIcon, PersonalSnackIcon} from '../components/Icons'

export default function Home() {
  return (
    <Container isColumn={true}>
        <Container isColumn={true}>
            <Button text="(11) 9.4731-5901" path="/" isDark={true}/>
            <Button text="(11) 9.4731-5901" path="/" icon={<FaWhatsapp />} isDark={true} />
            <Button text="(11) 9.4731-5901" path="/" customIcon={<PersonalSnackIcon />} isDark={true} />
        </Container>
        <Container isColumn={true} isDark={true}>
            <Button text="(11) 9.4731-5901" path="/" />
            <Button text="(11) 9.4731-5901" path="/" icon={<FaWhatsapp />} />
            <Button text="(11) 9.4731-5901" path="/" customIcon={<PersonalChefIcon />} />
        </Container>
        <Container isColumn={true}>
            <h2>With Shadow</h2>
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" isDark={true} />
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" icon={<FaWhatsapp />} isDark={true}  />
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" customIcon={<PersonalChefIcon />} isDark={true}  />
        </Container>
        <Container isColumn={true} isDark={true}>
            <h2>With Shadow</h2>
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" />
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" icon={<FaWhatsapp />}  />
            <ButtonWithShadow text="(11) 9.4731-5901" path="/" customIcon={<PersonalSnackIcon />} />
        </Container>
    </Container>
  )
}
