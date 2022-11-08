import styled from 'styled-components'
import config from '../config.json'

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background: url(${config.bg})center center no-repeat ;
  height: 230px;
  width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt={config.name} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header