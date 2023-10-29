import HeadConfig from '@/utils/HeadConfig';
import Showcase from '@/components/showcase';
import styled from 'styled-components';

const MainIndexConfigAction = styled.main `
  opacity: 1;
`
export default function Home() {
  return (
    <>
      <MainIndexConfigAction>
       <Showcase/>
      </MainIndexConfigAction>
    </>
  )
}
